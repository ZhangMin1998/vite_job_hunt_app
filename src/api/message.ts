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

// 获取常用语列表
export function getChatMessageWordsList(data: any) {
  return request({
    url: '/it_chat/message/works/list',
    method: 'get',
    params: data
  })
}

// 常用语添加
export function addChatMessageWords(data: any) {
  return request({
    url: '/it_chat/message/works/add',
    method: 'post',
    data
  })
}
