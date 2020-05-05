import {
  Notify
} from 'vant';

export const Message = (text) => {
  this.$notify({
    type: 'primary',
    message: text
  });
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