const mongooose = require('mongoose')
const Schema = mongooose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
  },
  data: {
    // 每创建一个数据 ,自动获取创建时间
    type: Date,
    default: Date.now,
  },
  identity: {
    // 权限字段
    type: String,
  }
})

module.exports = User = mongooose.model('users', userSchema)