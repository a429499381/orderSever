import service from '../axiosAction/config.js'


export function register(obj) {
  return service({
    url: '/register',
    method: 'post',
    data: obj,
    validateStatus: function(status) {
      return status >= 200 && status < 500; // default
    },
  })
}

export function login(obj) {
  return service({
    url: '/register',
    method: 'post',
    data: obj,
    validateStatus: function(status) {
      return status >= 200 && status < 500; // default
    },
  })
}



// axios#request(config)
// axios#get(url[, config])
// axios#delete(url[, config])
// axios#head(url[, config])
// axios#options(url[, config])
// axios#post(url[, data[, config]])
// axios#put(url[, data[, config]])
// axios#patch(url[, data[, config]])
// axios#getUri([config]
