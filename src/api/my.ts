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
// 我的提现接口
export function withdrawal(data: any) {
  return request({
    url: '/my/apply/transfer',
    method: 'post',
    data
  })
}
// 获取我的简历详情接口
export function resumeDetail(data: any) {
  return request({
    url: '/admin/resume/getInfoDetailsAPI',
    method: 'get',
    params: {
      id: data.resume_id
    }
  })
}
// 我的简历个人优势保存接口
export function personAdvantage(data: any) {
  return request({
    url: '/resume/advantage',
    method: 'post',
    data
  })
}
// 获取我的简历类型字典接口
export function resumeDict() {
  return request({
    url: '/conllect/recuit/getRecuit',
    method: 'get',
    params: {}
  })
}
// 我的简历求职意愿保存接口
export function jobIntention(data: any) {
  return request({
    url: '/resume/job_intention',
    method: 'post',
    data
  })
}