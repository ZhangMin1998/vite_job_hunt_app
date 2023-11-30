import request from '@/utils/request'

// 获取验证码
export function getCode(data: any) {
  return request({
    url: '/login/code',
    method: 'post',
    data
  })
}


// 获取城市列表
export function getCityList() {
  return request({
    url: '/sys/city/list',
    method: 'get',
    // params: data
  })
}