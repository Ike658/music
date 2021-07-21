//引入axios
const axios = require("axios");
const _axios = axios.create({
    //定义请求头
    baseURL: "https://music.0melon0.cn/",
    //定义请求超时时间
    timeout: 3000,
});
//把axios扔出去与vue挂钩
module.exports = _axios;