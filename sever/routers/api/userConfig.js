// 导出指定消息
const registerRule = ['name', 'email', 'avatar', 'identity']

exports.EXPORT = (obj) => {
  if(!obj) {
     console.log('对象不能为空')
     return {}
  }
  const result = {}

  for(let i = 0; i < registerRule.length; i++) {
    let name = registerRule[i]
    if(obj[name]) {
      result[name] = obj[name]
    }
  }
   console.log('export', result) 
  return result
}