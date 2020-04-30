const mo = require('./connet.js')

// 规则模型
const userSchema = new mo.Schema({
  name: {
    type: String,
    reuquire: true,
    minlength: 3,
    maxlength: 20,
  },
  age: {
    type: Number,
    min: 18,
    max: 128,
  },
  password: {
    type: String,
    require: [true, '密码6-16为数字'],
    minlength: 6,
    maxlength: 16,
  },
  emial: {
    type: String,
  },
  hobbies: [String],
})

// 创建规则集合
exports.User = mo.model('User', userSchema)





 // // 匹配查询
// model.find({
//   age: {
//     $gt: 20,
//     $lt: 40,
//   }
// }, ).then((res) => {
//   console.log(res);

// })


// // 包含 in
// model.find({
//   name: {
//     $in: ['涛涛'],
//   }
// }).then((res) => {
//   console.log(res);

// });

// // 包含 select     - 排除
// model.find({
//   name: {
//     $in: ['涛涛'],
//   }
// }).select('name email -_id').sort('-name').then((res) => {
//   console.log(res);

// })