// const mo = require('../../data/connet.js')

const express = require('express')
const router = express.Router()
const createHash = require('../../bcrypt/hash.js').createHash
const hashCompare = require('../../bcrypt/hash.js').hashCompare

const gravatar = require('gravatar') // 全球统一头像
// token 
const createToken = require('../../bcrypt/token').createToken
const useToken = require('../../bcrypt/token').useToken

const User = require('../../data/model/user')

// 要传递给前端规范
const EXPORT = require('./userConfig.js').EXPORT

router.post('/register', async (req, res) => {
  const email = req.body.email
  console.log('email', req.body)
  if (!email) {
    return res.status(201).json({
      text: '邮箱不能为空',
      date: new Date,
    })
  }

  const user = await User.findOne({
    email,
  })
  // console.log('findOne: ', user)

  if (user) {
    return res.status(202).json({
      text: '邮箱已被注册',
      date: new Date,
    })
  }

  if (!user) {
    const avatar = gravatar.url(req.body.email, {
      s: '200',
      r: 'pg',
      d: 'mm',
    })
    // 加密
    const hash = await createHash(req.body.password)
    console.log('createhash', hash)
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      avatar: avatar,
      identity: req.body.identity,
      password: hash,
    })

    // 保存加密后的数据到数据库  返回数据
    newUser.save()
      .then((obj) => {
        res.json(EXPORT(obj))
      })
      .catch((err) => {
        console.log(err)
      })
  }
  // over
})

router.post('/login', async (req, res) => {
  const email = req.body.email || ''
  const ClientPassword = req.body.password || ''

  const user = await User.findOne({
    email,
  })
  // .then((user) => {
  // console.log(user)
  if (!user) {
    return res.status(201).json({
      text: '用户不存在',
      date: new Date,
    })
  }

  if (user) {
    // 密码匹配
    const isMatch = await hashCompare(ClientPassword.toString(), user.password)
    if (isMatch) {
      createToken(user).then((token) => {
        return res.json({
          success: true,
          token: `Bearer ${token}`,
        })
      })
    }

    if (!isMatch) {
      return res.status(202).json({
        text: '密码错误',
        date: new Date,
      })
    }


  }

  //over
})

// $route GET api/users/current
// @desc return current user
// @access private 
// 验证token
router.get('/current', useToken(), (req, res) => {
  console.count()
  let id = req.user.id
  User.findById(id)
    .then((result) => {
      //  console.log('result', result)
      if (result) {
        return res.json(EXPORT(result))
      }
      if (!result) {
        return res.status(401).json('验证错误')
      }

    })
    .catch((err) => {
      console.log(err)
    })

})


module.exports = router