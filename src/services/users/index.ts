import { request } from '@/services/api'
import * as Users from '@/services/users/type'


// 登录
export function LoginDataApi(data: Users.LoginRequestData) {
  return request({
    url: "/login",
    method: "post",
    data
  })
}