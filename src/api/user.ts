import request from '@/utils/request'

// 获取验证码
export function getCode(data: any) {
  return request({
    url: '/login/code',
    method: 'post',
    data
  })
}

// 登录
export function login(data: any) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

// 获取协议文件
export function getPolicy(data: any) {
  return request({
    url: '/policy_protocol/list',
    method: 'get',
    params: data
  })
}