import request from '@/utils/request'

// 获取用户基本信息
export function getUserInfo() {
  return request({
    url: '/clicent/user_info',
    method: 'get',
    // params: data
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

// 图片上传接口
export function uploadImage(data: any) {
  return request({
      url: '/upload/image',
      method: 'post',
      data,
      headers: {
          'Content-Type': 'multipart/form-data'
      }
  })
}

// 个人信息提交接口
export function userModify(data: any) {
  return request({
      url: '/user/modify',
      method: 'put',
      data
  })
}

// 获取我的收藏接口
export function collectList() {
  return request({
    url: '/task/getTaskCollection',
    method: 'get',
    params: {}
  })
}

// 获取我的收入接口
export function incomeList(data: any) {
  return request({
    url: '/admin/task/purchaseRecord',
    method: 'get',
    params: data
  })
}

// 获取我的提现接口
export function transferList() {
  return request({
    url: '/my/transfer/userList',
    method: 'get',
    params: {}
  })
}