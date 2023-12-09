import request from '@/utils/request'

// 获取消息列表
export function getMessageList(data: any) {
  return request({
    url: '/user/inform/list',
    method: 'get',
    params: data
  })
}

// 获取消息详情
export function getSystemDetail(data: any) {
  return request({
    url: '/user/inform/lookover',
    method: 'get',
    params: data
  })
}

// 获取对话列表
export function getChatMessageList(data: any) {
  return request({
    url: '/it_chat/my/message/list',
    method: 'get',
    params: data
  })
}

// 获取对话消息聊天内容
export function getChatMessageContent(data: any) {
  return request({
    url: '/it_chat/message/list',
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
