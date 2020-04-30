// 封装 消息
import {Message} from 'element-ui'
export const success = (obj = 'null') => {
  console.log(Message)
  Message.success({
    message: obj,
  })
}

export const error = (obj) => {
  Message.error({
    message: obj,
  })
}