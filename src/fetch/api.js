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

/**
 * @param 重置密码(发送验证码)
 */
export const Getcode = (param) => {
  return Post('/mobile/login/forget_password', param)
}

/**
 * @param 重置密码(验证短信验证码)
 */
export const Checkcode = (param) => {
  return Post('/mobile/login/checking_code', param)
}

/**
 * @param 重置密码(验证短信验证码)
 */
export const Resetpassword = (param) => {
  return Post('/mobile/login/reset_password', param)
}

/**
 * @param 退出登陆
 */
export const Loginout = (param) => {
  return Post('/mobile/login/logout', param)
}

/* ----------------首页接口------------------- */

/**
 * @param 获取工种类型
 */
export const Getworktype = (param) => {
  return Post('/mobile/index/index', param)
}

/**
 * @param 雇佣动态
 */
export const Employstate = (param) => {
  return Post('/mobile/index/employ_news', param)
}

/**
 * @param 为你推荐的人才
 */
export const RecommendData = (param) => {
  return Post('/mobile/index/recommend_index', param)
}

/* ----------------交易记录------------------- */

/**
 * @param 交易记录
 */
export const transactionRecord = (param) => {
  return Post('/mobile/bossmember/transaction_record', param)
}
