const mongooose = require('mongoose')
const Schema = mongooose.Schema

const userSchema = new Schema({
   type: {
     type: String,
   },
   miaoshu: {
    type: String,
  },
  shouru: {
    type: String,
    require: true,
  },
  jiage: {
    type: String,
    require: true,
  },
  zhichu: {
    type: String,
    require: true,
  },
  xianjin: {
    type: String,
    require: true,
  },
  beizhu: {
    type: String,
  },
   date: {
     type: Date,
     default: Date.now,
   }
})

module.exports = List = mongooose.model('List', userSchema)