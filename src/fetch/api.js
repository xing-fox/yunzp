import {Post} from './axios.js'

/**
 * @param 用户登陆接口(用户名/手机号码)
 */
export const Login = (param) => {
  return Post('/mobile/login/doLogin', param)
}

/**
 * @param 用户注册接口(用户名/手机号码)
 */
export const Register = (param) => {
  return Post('/mobile/register/doRegister', param)
}
