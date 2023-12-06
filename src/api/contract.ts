import request from '@/utils/request'

// 获取验证码
export function getCode(data: any) {
  return request({
    url: '/login/code',
    method: 'post',
    data
  })
}


// 获取合约列表
export function getContractAllList(data: any) {
  return request({
    url: '/task/myContractAllList',
    method: 'get',
    params: data
  })
}