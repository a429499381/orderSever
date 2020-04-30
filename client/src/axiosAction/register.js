import service from '../axiosAction/config.js'


export function register(obj) {
  return service({
    url: '/register',
    method: 'post',
    data: obj,
  
  })
}

export function login(obj) {
  return service({
    url: '/login',
    method: 'post',
    data: obj,
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
