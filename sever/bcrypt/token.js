const jwt = require('jsonwebtoken') // token 生产
const key = require('../config/keys') // 配置参数
// token 解析
const passport = require('passport')
const reslovePassport = require('./passport')


exports.initToken = () => {
  return passport.initialize()
}

exports.createToken = (user) => {
  const rule = {
    id: user.id,
    name: user.name,
  }
  return new Promise((resolve, reject) => {

    jwt.sign(rule, key.secretKey, {expiresIn: 3600}, (err, token) => {
      if (err) {
        throw err
        reject(err)
      } else {
        resolve(token)
      }

    })

  })
}

// 解析token
exports.useToken = () => {
   return  passport.authenticate("jwt", { session: false})
}

exports.resolveToken = () => {
     return reslovePassport(passport)
}
