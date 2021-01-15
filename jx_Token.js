/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京喜账号token。
//注：github action用户token填写到Settings-Secrets里面，新增JX_TOKEN，多个账号的token使用`&`隔开或者换行
//"farm_jstoken":"f33ad87b014c79921d2d2430f3d2eb84","phoneid":"c18613cab073b19ba6d9f4e49695c585997ad5e7","timestamp":"1608302861453","pin":"jd_5a3d9cc737f52"
let JXTOKENs = [
    '',//账号一token,例:"farm_jstoken":"XXX","phoneid":"XXX","timestamp":"XXX","pin":"XXX"
    '',//账号二token,例:"farm_jstoken":"XXX","phoneid":"XXX","timestamp":"XXX","pin":"XXX"如有更多,依次类推
]
// 判断github action里面是否有京喜token
if (process.env.JX_TOKEN) {
    if (process.env.JX_TOKEN.indexOf('&') > -1) {
        console.log(`您的token选择的是用&隔开\n`)
        JXTOKENs = process.env.JX_TOKEN.split('&');
    } else if (process.env.JX_TOKEN.indexOf('\n') > -1) {
        console.log(`您的token选择的是用换行隔开\n`)
        JXTOKENs = process.env.JX_TOKEN.split('\n');
    } else {
        JXTOKENs = [process.env.JX_TOKEN];
    }
}
JXTOKENs = [...new Set(JXTOKENs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${JXTOKENs.length}个京喜账号Token=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < JXTOKENs.length; i++) {
    const index = (i + 1 === 1) ? '' : (i + 1);
    exports['jxnc_token' + index] = JXTOKENs[i].trim();