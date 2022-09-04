import emitter from '@/methods/emitter.js'

export default function (res, title = '更新') {
  if (res.data.success) {
    this.getProducts()
    emitter.emit('push-message', {
      style: 'success',
      title: `${title}更新成功`
    })
  } else {
    const message = typeof res.data.message === 'string' ? [res.data.message] : res.data.message
    emitter.emit('push-message', {
      style: 'danger',
      title: `${title}更新失敗`,
      content: message.join('、')
    })
  }
}
