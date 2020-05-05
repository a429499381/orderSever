import {
  Notify
} from 'vant';

Notify.setDefaultOptions({
  duration: 500,
  className: 'order',
})

export const success = (text) => {
  Notify({ type: 'success', message: text });
}

export const error = (text) => {
  Notify({ duration: 3000, type: 'danger', message: text });
}

// 封装 消息
// import {Message} from 'element-ui'
// export const success = (obj = 'null') => {
//   Message.success({
//     message: obj,
//     duration: 500,
//   })
// }

// export const error = (obj) => {
//   Message.error({
//     message: obj,
//     duration: 500,
//   })
// }