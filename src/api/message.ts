import request from '@/utils/request'

// 获取消息列表
export function getMessageList(data: any) {
  return request({
    url: '/user/inform/list',
    method: 'get',
    params: data
  })
}

// 获取验证码
export function getCode(data: any) {
  return request({
    url: '/login/code',
    method: 'post',
    data
  })
}
