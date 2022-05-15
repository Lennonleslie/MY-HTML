// 时间刷新1s
setInterval(function () {
    // 刷新的时候，对chinaTime的标签进行重新赋值，是农历
    // 获取时间显示块
    var chinaTime = document.querySelector('#chinaTime');
    chinaTime.innerText = new Date().toLocaleString('zh-CN-u-ca-chinese')
        .replace(/(\d+)\s*?年/, function (_, y) { return "甲乙丙丁戊己庚辛壬癸".charAt((y - 4) % 10) + "子丑寅卯辰巳午未申酉戌亥".charAt((y - 4) % 12); });
    //这行代码的出处：https://www.mzh.ren/javascript-1-line-get-lunar-date.html
}, 1000);
// 背景刷新计时器
// 计数器I
var i = 0;
setInterval(function () {
    // 获得背景ID所在的标签
    var backImg = document.querySelector('#backImg');
    i++;
    i >= 4 ? i = 0 : i = i;
    // 移除背景类
    backImg.classList.remove('backImg1', 'backImg2', 'backImg3', 'backImg4');
    // 创建图片数组
    var backImgs = ['backImg1', 'backImg2', 'backImg3', 'backImg4'];
    // 获取body的类并检查这个类
    // let body = document.querySelector('#body');
    // body.classList
    //body.forEach(function () { });
    backImg.classList.add(backImgs[i]);
}, 5000);
