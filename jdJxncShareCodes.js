/*
京喜农场助力码
此助力码要求种子 active 相同才能助力，多个账号的话可以种植同样的种子，如果种子不同的话，会自动跳过使用云端助力
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京京喜农场的好友码。
// github action用户的好友助力码填写到Action->Settings->Secrets->new Secret里面(Name填写 JxncShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写助力码,填写规则如下)
// 同一个京东账号的好友助力码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let JxncShareCodes = [
'71fa458760687770b65fea5a8ae6b1b6@8ff82af6970adba0aabe644f50feca00@5d3d2705a6a2a72e493da6c63a963f7a@b75ed1a1d12800fc06a44aa0dfc03e55@c7a26a43cf623c24154e6b5e13454bb2@d37f43ff4f50b46107d2b812c0750ccf@83ba6f4ee1bec94c3bb0bbafb7810768@2cfa2c3fc07ee89544cc8efbea457822@b9b12d83f1960d1d8ba378bfd05703b6@2c43bd75557e9e32a9ac1ae8017a68be@213f060bff612da8c3b7d6641d4077ec@aec30c0293c3ec33adb72446195911d4@aab1123d5d1787fb140763bd1d5ac29b@7d24fde4e3957562e2967f4740434155@49bf2918fa252e1f604f30ac7e18f1cd@39aac6f20d5f03e220701506064f9879@a37baf7dfb03615eb62de747dedf654d@8cbc2025a1798aba7513e7d487a11c0b',
'71fa458760687770b65fea5a8ae6b1b6@8ff82af6970adba0aabe644f50feca00@5d3d2705a6a2a72e493da6c63a963f7a@b75ed1a1d12800fc06a44aa0dfc03e55@c7a26a43cf623c24154e6b5e13454bb2@d37f43ff4f50b46107d2b812c0750ccf@83ba6f4ee1bec94c3bb0bbafb7810768@2cfa2c3fc07ee89544cc8efbea457822@b9b12d83f1960d1d8ba378bfd05703b6@2c43bd75557e9e32a9ac1ae8017a68be@213f060bff612da8c3b7d6641d4077ec@aec30c0293c3ec33adb72446195911d4@aab1123d5d1787fb140763bd1d5ac29b@7d24fde4e3957562e2967f4740434155@49bf2918fa252e1f604f30ac7e18f1cd@39aac6f20d5f03e220701506064f9879@a37baf7dfb03615eb62de747dedf654d@8cbc2025a1798aba7513e7d487a11c0b',
'71fa458760687770b65fea5a8ae6b1b6@8ff82af6970adba0aabe644f50feca00@5d3d2705a6a2a72e493da6c63a963f7a@b75ed1a1d12800fc06a44aa0dfc03e55@c7a26a43cf623c24154e6b5e13454bb2@d37f43ff4f50b46107d2b812c0750ccf@83ba6f4ee1bec94c3bb0bbafb7810768@2cfa2c3fc07ee89544cc8efbea457822@b9b12d83f1960d1d8ba378bfd05703b6@2c43bd75557e9e32a9ac1ae8017a68be@213f060bff612da8c3b7d6641d4077ec@aec30c0293c3ec33adb72446195911d4@aab1123d5d1787fb140763bd1d5ac29b@7d24fde4e3957562e2967f4740434155@49bf2918fa252e1f604f30ac7e18f1cd@39aac6f20d5f03e220701506064f9879@a37baf7dfb03615eb62de747dedf654d@8cbc2025a1798aba7513e7d487a11c0b',
'71fa458760687770b65fea5a8ae6b1b6@8ff82af6970adba0aabe644f50feca00@5d3d2705a6a2a72e493da6c63a963f7a@b75ed1a1d12800fc06a44aa0dfc03e55@c7a26a43cf623c24154e6b5e13454bb2@d37f43ff4f50b46107d2b812c0750ccf@83ba6f4ee1bec94c3bb0bbafb7810768@2cfa2c3fc07ee89544cc8efbea457822@b9b12d83f1960d1d8ba378bfd05703b6@2c43bd75557e9e32a9ac1ae8017a68be@213f060bff612da8c3b7d6641d4077ec@aec30c0293c3ec33adb72446195911d4@aab1123d5d1787fb140763bd1d5ac29b@7d24fde4e3957562e2967f4740434155@49bf2918fa252e1f604f30ac7e18f1cd@39aac6f20d5f03e220701506064f9879@a37baf7dfb03615eb62de747dedf654d@8cbc2025a1798aba7513e7d487a11c0b'
]
// 判断github action里面是否有京喜农场助力码
if (process.env.JXNC_SHARECODES) {
  if (process.env.JXNC_SHARECODES.indexOf('&') > -1) {
    console.log(`您的京喜农场助力码选择的是用&隔开\n`)
    JxncShareCodes = process.env.JXNC_SHARECODES.split('&');
  } else if (process.env.JXNC_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的京喜农场助力码选择的是用换行隔开\n`)
    JxncShareCodes = process.env.JXNC_SHARECODES.split('\n');
  } else {
    JxncShareCodes = process.env.JXNC_SHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  // console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < JxncShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JxncShareCode' + index] = JxncShareCodes[i];
}
