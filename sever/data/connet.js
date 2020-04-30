
const db = require('mongoose')

// const url = 'mongdb://localhost/playground'
// const url = 'mongodb://127.0.0.1/my_database';

// DB config
const url = require('../config/keys').mongoUrl

db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('数据库ok');
  })
  .catch((e) => {
    console.log('数据库err', e);

  })
  console.count('mongoose count')

  exports.db = db
