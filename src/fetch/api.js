import {Post} from './axios.js'

/* ----------------首页接口------------------- */

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
 * @param 搜索接口
 */
export const Abilityindex = (param) => {
  return Post('/mobile/index/ability_index', param)
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

/**
 * @param 我的钱包（个人中心接口）
 */
export const Mywallet = (param) => {
  return Post('/mobile/bossmember/my_wallet', param)
}

/**
 * @param 交易记录（个人中心接口）
 */
export const transactionrecord = (param) => {
  return Post('/mobile/bossmember/transaction_record', param)
}

/**
 * @param 雇佣记录（个人中心接口）
 */
export const Employeelist = (param) => {
  return Post('/mobile/bossmember/employee_list', param)
}

/**
 * @param 我的员工（个人中心接口）
 */
export const Mystaff = (param) => {
  return Post('/mobile/bossmember/mystaff', param)
}

/**
 * @param 我的收藏（个人中心接口）
 */
export const Collectionlist = (param) => {
  return Post('/mobile/bossmember/collection_list', param)
}

/**
 * @param 我的收藏详情（个人中心接口）
 */
export const Resumeinfo = (param) => {
  return Post('/mobile/bossmember/resume_info', param)
}

/**
 * @param 已收简历（个人中心接口）
 */
export const Resumelist = (param) => {
  return Post('/mobile/bossmember/resume_list', param)
}

/**
 * @param 查看简历（个人中心接口）
 */
export const ResumeInfo = (param) => {
  return Post('/mobile/bossmember/resume_info', param)
}

/**
 * @param 用户充值（个人中心接口）
 */
export const MemberRecharge = (param) => {
  return Post('/mobile/pay/member_recharge', param)
}
