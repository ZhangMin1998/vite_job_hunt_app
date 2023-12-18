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