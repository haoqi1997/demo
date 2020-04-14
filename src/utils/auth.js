import Cookies from 'js-cookie';

// 管理员信息
const ADMIN_INFO = 'admin_info';

// 获取基本信息
function getUserInfo() {
    return Cookies.getJSON(ADMIN_INFO);
}
// 存储基本信息
function setUserInfo(info) {
    return Cookies.set(ADMIN_INFO, info);
}
// 退出登录，清除所有登录信息
function logout() {
    return Cookies.remove(ADMIN_INFO);
}

export {
    getUserInfo,
    setUserInfo,
    logout
}