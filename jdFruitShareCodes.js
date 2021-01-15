/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 FruitShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
'e223d73654214a6485a5f04385e42585@6d029f0554784041a95f3e602d6eb6c1@be66abf7bbed433598755b419e847a10@17e6a0ae483844cc93c5090725999298@f32063da98604a719172d7fae83bc4c5@ac5c32f7ccc8431abcbce2304dab8ea8@e8be2abb567846188d91a866ea1b6cf9@6152a68a79164145849f05d9ca836872@3bd850021b6e40e5bfdb15c12c3af3a5@66d2189764ea47a9b7e3dbfb79186adf@306514548307437295eb44cc4db9be7f@06adb0abec164d8ab3709ee951599c30@fff30b766ec241e28fdee14626ea79d1@79bf27094ae5498ea3fbc917f905ffef@471b94caeda9446cb9be1f80006a7383@fb0e309813c543c38ead8c9d0df13685@22f766608e854f20a11b001a339260bb@e1f0f2567f7b4dd099f5a36fde3a51c7',
'e223d73654214a6485a5f04385e42585@6d029f0554784041a95f3e602d6eb6c1@be66abf7bbed433598755b419e847a10@17e6a0ae483844cc93c5090725999298@f32063da98604a719172d7fae83bc4c5@ac5c32f7ccc8431abcbce2304dab8ea8@e8be2abb567846188d91a866ea1b6cf9@6152a68a79164145849f05d9ca836872@3bd850021b6e40e5bfdb15c12c3af3a5@66d2189764ea47a9b7e3dbfb79186adf@306514548307437295eb44cc4db9be7f@06adb0abec164d8ab3709ee951599c30@fff30b766ec241e28fdee14626ea79d1@79bf27094ae5498ea3fbc917f905ffef@471b94caeda9446cb9be1f80006a7383@fb0e309813c543c38ead8c9d0df13685@22f766608e854f20a11b001a339260bb@e1f0f2567f7b4dd099f5a36fde3a51c7',
'e223d73654214a6485a5f04385e42585@6d029f0554784041a95f3e602d6eb6c1@be66abf7bbed433598755b419e847a10@17e6a0ae483844cc93c5090725999298@f32063da98604a719172d7fae83bc4c5@ac5c32f7ccc8431abcbce2304dab8ea8@e8be2abb567846188d91a866ea1b6cf9@6152a68a79164145849f05d9ca836872@3bd850021b6e40e5bfdb15c12c3af3a5@66d2189764ea47a9b7e3dbfb79186adf@306514548307437295eb44cc4db9be7f@06adb0abec164d8ab3709ee951599c30@fff30b766ec241e28fdee14626ea79d1@79bf27094ae5498ea3fbc917f905ffef@471b94caeda9446cb9be1f80006a7383@fb0e309813c543c38ead8c9d0df13685@22f766608e854f20a11b001a339260bb@e1f0f2567f7b4dd099f5a36fde3a51c7',
'e223d73654214a6485a5f04385e42585@6d029f0554784041a95f3e602d6eb6c1@be66abf7bbed433598755b419e847a10@17e6a0ae483844cc93c5090725999298@f32063da98604a719172d7fae83bc4c5@ac5c32f7ccc8431abcbce2304dab8ea8@e8be2abb567846188d91a866ea1b6cf9@6152a68a79164145849f05d9ca836872@3bd850021b6e40e5bfdb15c12c3af3a5@66d2189764ea47a9b7e3dbfb79186adf@306514548307437295eb44cc4db9be7f@06adb0abec164d8ab3709ee951599c30@fff30b766ec241e28fdee14626ea79d1@79bf27094ae5498ea3fbc917f905ffef@471b94caeda9446cb9be1f80006a7383@fb0e309813c543c38ead8c9d0df13685@22f766608e854f20a11b001a339260bb@e1f0f2567f7b4dd099f5a36fde3a51c7'
]
// 判断github action里面是否有东东农场互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
