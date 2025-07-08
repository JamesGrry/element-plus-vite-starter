import { request } from '@/services/api'
import * as Users from '@/services/users/type'


// 登录
export function LoginDataApi(data: Users.LoginRequestData) {
  return request({
    url: "/service/Auth.action",
    method: "post",
    data,
    contentType: "form",
  })
}

export function geiSysMenus(data: Users.SysMenusData) {
  return request({
    url: "/service/SysMenus.action",
    method: "post",
    data,
    contentType: "form",
  })
}