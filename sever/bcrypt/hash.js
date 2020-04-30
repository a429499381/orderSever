const bcrypt = require('bcrypt')

exports.createHash = (data) => {
  // 如果不是字符串 转换为字符串
   if(typeof data !== String) {
     data = data.toString()
   }
  return new Promise((resolve, reject) => {

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(data, salt, function (err, hash) {
        if (err) {
          throw err
          reject(err)
        }
        if (hash) {
        // console.log(hash)
         resolve(hash)
        }

      })
    })
  })

}


exports.hashCompare =  (LoginPassword, dbPassword) => {
  return  bcrypt.compare(LoginPassword, dbPassword)
}
