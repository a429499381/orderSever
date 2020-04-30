// const mo = require('../../data/connet.js')

const express = require('express')
const router = express.Router()
// token 解析
const passport = require('passport')
// List 数据模型
const List = require('../../data/model/list')


router.post('/add', (req, res) => {
  var ListObj = {}
  const By = req.body
  console.log(By)

  By.type ? ListObj.type = By.type : '';
  By.miaoshu ? ListObj.miaoshu = By.miaoshu : '';
  By.shouru ? ListObj.shouru = By.shouru : 0;
  By.jiage ? ListObj.jiage = By.jiage : 0;
  By.zhichu ? ListObj.zhichu = By.zhichu : 0;
  By.xianjin ? ListObj.xianjin = By.xianjin : 0;
  By.beizhu ? ListObj.beizhu = By.beizhu : '';

  new List(ListObj).save().then((result) => {
    return res.json(result)
  })

})

router.get('/all', (req, res) => {
  const By = req.body

  List.find().then((result) => {
      if (result) {
        return res.json(result)
      }
      if (!result) {
        return res.status(400).json('没有列表')
      }
    })
    .catch((err) => {
      res.status(404).json(err)
    })
})

router.get('/:id', (req, res) => {
  const By = req.params
  List.findById(By.id)
    .then((result) => {
      if (result) {
        return res.json(result)
      }
      if (!result) {
        return res.status(400).json('信息不存在')
      }
    })
    .catch((err) => {
      return res.status(404).json(err)
    })
})


router.post('/update/:id', (req, res) => {
  var ListObj = {}
  const By = req.body
  const id = req.params.id || 0

  By.type ? ListObj.type = By.type : '';
  By.miaoshu ? ListObj.miaoshu = By.miaoshu : '';
  By.shouru ? ListObj.shouru = By.shouru : 0;
  By.jiage ? ListObj.jiage = By.jiage : 0;
  By.zhichu ? ListObj.zhichu = By.zhichu : 0;
  By.xianjin ? ListObj.xianjin = By.xianjin : 0;
  By.beizhu ? ListObj.beizhu = By.beizhu : '';

  List.findOneAndUpdate(
      { _id: id}, 
      {$set: ListObj},
      {new: true}, 
     )
     .then((result) => {return res.json(result)})

})




router.delete('/remove/:id', (req, res) => {
  const By = req.params
  // console.log(By.id)
  List.findOneAndRemove({
      _id: By.id
    })
    .then((result) => {
      if (result) {
        return res.json(result)
      }
      if (!result) {
        return res.status(400).json('信息不存在')
      }
    })
    .catch((err) => {
      return res.status(404).json(err)
    })

})

module.exports = router