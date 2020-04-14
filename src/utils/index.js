/**
 * 工具类
 */

export default {

    /**
     * 判断非空
     * @param val
     * @returns {Boolean}
     */
    isEmpty(val) {

        val = (val + '').replace(/\u200B/g, '') // \u200B为&#8203;无宽度空格
        if (val == null || val == 'null') {
            return true
        }
        if (val == undefined || val == 'undefined') {
            return true
        }
        if (val == '') {
            return true
        }
        if (val.length == 0) {
            return true
        }
        if (!/[^(^\s*)|(\s*$)]/.test(val)) {
            return true
        }
        return false
    },

    isNotEmpty(val) {

        return !this.isEmpty(val)
    },

    // 判断一个字符串是否为数字
    isNum(str) {
        return !isNaN(str)
    },
    // 判断是否为手机号格式
    isMobile(str) {
        return /^1[34578][0-9]{9}$/.test(str)
    },
    // 判断是否为邮箱格式
    isEmail(str) {
        //      return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(str)
        return /^([a-zA-Z0-9])+@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/.test(str)
    },
    // 字母或者数字
    isLetterAndNum(str) {
        return /^[A-Za-z0-9]+$/.test(str)
    },

    getQueryString(params, url) {
        url = url || location.href
        const search = url.split('?')[1]
        if (search) {
            const n = new RegExp(`(^|&)${params}=([^(&|#)]*)((&|#)|$)`, 'i')
            const r = search.match(n)
            return (r != null) ? r[2] : null
        }
        return null
    },
    // 数字转中文
    toChinesNum(num) {
        let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'] //changeNum[0] = "零"
        let unit = ["", "十", "百", "千", "万"]
        num = parseInt(num)
        let getWan = (temp) => {
            let strArr = temp.toString().split("").reverse()
            let newNum = ""
            for (var i = 0; i < strArr.length; i++) {
                newNum = (i == 0 && strArr[i] == 0 ? "" : (i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ? "" : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i]))) + newNum
            }
            return newNum
        }
        let overWan = Math.floor(num / 10000)
        let noWan = num % 10000
        if (noWan.toString().length < 4) noWan = "0" + noWan
        return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num)
    },
    // 秒转成日时分
    secondToDate(s) {
        var time = s
        if (null != time && "" != time) {
            if (time > 60 && time < 60 * 60) {
                time = parseInt(time / 60.0) + "分钟" + parseInt((parseFloat(time / 60.0) -
                    parseInt(time / 60.0)) * 60) + "秒";
            } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
                time = parseInt(time / 3600.0) + "小时" + parseInt((parseFloat(time / 3600.0) -
                        parseInt(time / 3600.0)) * 60) + "分钟" +
                    parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                        parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
            } else if (time >= 60 * 60 * 24) {
                time = parseInt(time / 3600.0 / 24) + "天" + parseInt((parseFloat(time / 3600.0 / 24) -
                        parseInt(time / 3600.0 / 24)) * 24) + "小时" + parseInt((parseFloat(time / 3600.0) -
                        parseInt(time / 3600.0)) * 60) + "分钟" +
                    parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                        parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
            } else {
                time = parseInt(time) + "秒";
            }
        }
        return time
    },
    // 错误边框提示
    errorBorderTip(ele) {
        const oldStyle = ele.style.borderColor
        let interval = setInterval(() => {
            let color = ele.style.borderColor
            if (color != 'red') {
                ele.style.borderColor = 'red'
            } else {
                ele.style.borderColor = oldStyle
            }
        }, 100)

        let timer = setTimeout(() => {
            interval && clearInterval(interval)
            timer && clearTimeout(timer)
        }, 1000)
    },

    // html标签过滤 
    filterHtmlTag(str) {
        return str ? str.replace(/<\/?[^>]*>/g, '').replace(/[|]*\n/, '').replace(/&npsp;/ig, '') : str
    },
    // 身份证验证
    isIdCard(str) {
        return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(str)
    }

}