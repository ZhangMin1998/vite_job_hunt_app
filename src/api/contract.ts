import request from '@/utils/request'

// 获取合约列表
export function getContractAllList(data: any) {
  return request({
    url: '/task/myContractAllList',
    method: 'get',
    params: data
  })
}

// 合约详情接口
export function getContractDetail(data: any) {
  return request({
      url: '/task/contractAllList',
      method: 'get',
      params: data
  })
}

// 合约签约/拒绝接口
export function contractOperation(data: any) {
  return request({
    url: '/contract/isContract',
    method: 'put',
    data
  })
}