const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const port = process.env.PORT || 3000

const cors=require('cors');


// 引入router 
const users = require('./routers/api/user')
const lists = require('./routers/api/list')

// 连接数据库
const mongo = require('./data/connet').db

// 验证 token
// const passport = require('passport')
const initToken = require('./bcrypt/token').initToken
const resolveToken = require('./bcrypt/token').resolveToken

app.use(cors({
  origin:['http://localhost:8080'],  //指定接收的地址˚
  methods:['GET','POST'],  //指定接收的请求类型
  allowedHeaders:['Content-Type','Authorization',],  //指定header
  // 'Access-Control-Allow-Credentials' : true, 
}))

// 使用中间件 urlencoded
app.use(bodyParse.urlencoded({extended: false,}))
app.use(bodyParse.json())

// 使用验证 token
app.use(initToken())
resolveToken()

// 使用路由
app.use('/api/users', users)
app.use('/api/lists', lists)

// app.use('*',function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
// //res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
//   if (req.method == 'OPTIONS') {
//     res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
//   }
//   else {
//     next();
//   }
// });



app.listen(port, () => {
  console.info('当前地址:',`http://localhost:${port}`)
})