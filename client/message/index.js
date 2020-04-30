// 封装 消息
import {Message} from 'element-ui'
export const success = (obj = 'null') => {
  Message.success({
    message: obj,
    duration: 500,
  })
}

export const error = (obj) => {
  Message.error({
    message: obj,
    duration: 500,
  })
}