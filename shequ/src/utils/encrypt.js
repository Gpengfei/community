// const CryptoJS = require('crypto-js')
import CryptoJS from 'crypto-js'

// const key = CryptoJS.enc.Utf8.parse('1234123412ABCDEF') // 十六位十六进制数作为密钥
// const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412') // 十六位十六进制数作为密钥偏移量

// 解密方法
function Decrypt(word) {
    var key = CryptoJS.enc.Utf8.parse("8888666612ABCDEF");
    var decrypt = CryptoJS.AES.decrypt(word, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

// 加密方法
function Encrypt(word) {
    var key = CryptoJS.enc.Utf8.parse("8888666612ABCDEF");
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}
// 获取随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}
// 触底函数封装
function scroll(addList) {
    // let isLoading = false
    window.onscroll = () => {
        var scrollTop =
            document.documentElement.scrollTop ||
            window.pageYOffset ||
            document.body.scrollTop;
        let bottomOfWindow = document.documentElement.offsetHeight - scrollTop - window.innerHeight <= 0
        if (bottomOfWindow) {
            addList()
        }
        // console.log(bottomOfWindow)
    }
}
// 屏蔽字符串方法封装
function plusXing(str, frontLen, endLen) {
    var len = str.length - frontLen - endLen;
    var xing = '';
    for (var i = 0; i < len; i++) {
        xing += '*';
    }
    return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
}
// url获取参数
function queryString(urls, qss) {
    let url = urls.substring(26);//获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    var ss = theRequest[qss]
    return ss;

}
export default {
    Decrypt,
    Encrypt,
    randomNum,
    scroll,
    plusXing,
    queryString
}