// token 解析
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const key = require('../config/keys')
const opts = {}

//得到token
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//设置token时使用的加密名字
opts.secretOrKey = key.secretKey;

module.exports = (passport) => {
  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    console.log('jwt_payload',jwt_payload,  jwt_payload.id);
    return done(null, jwt_payload)
  
  }));

}