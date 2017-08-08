var priceData = {
    "priceList": [{
            imgurl: ['http://localhost:8080/static/images/1.jpg'],
            introduce: '优品|签收不粘锅炒锅32cm区数据回家',
            price: '28.9',
            discount: '1.5折',
            man: '满减',
            block: 'true'
        },
        {
            imgurl: '//z13.tuanimg.com/imagev2/trade/700x700.109343b6dd704ee18ea33c3ff44e565b.310x310.jpg.webp',
            introduce: '优品|签收不粘锅炒锅32cm区数据回家',
            price: '28.9',
            discount: '1.5折'
        },
        {
            imgurl: '//z13.tuanimg.com/imagev2/trade/700x700.109343b6dd704ee18ea33c3ff44e565b.310x310.jpg.webp',
            introduce: '优品|签收不粘锅炒锅32cm区数据回家',
            price: '28.9',
            discount: '1.5折'
        },
        {
            imgurl: '//z13.tuanimg.com/imagev2/trade/700x700.109343b6dd704ee18ea33c3ff44e565b.310x310.jpg.webp',
            introduce: '优品|签收不粘锅炒锅32cm区数据回家',
            price: '28.9',
            discount: '1.5折'
        },
        {
            imgurl: '//z13.tuanimg.com/imagev2/trade/700x700.109343b6dd704ee18ea33c3ff44e565b.310x310.jpg.webp',
            introduce: '优品|签收不粘锅炒锅32cm区数据回家',
            price: '28.9',
            discount: '1.5折'
        },
        {
            imgurl: '//z13.tuanimg.com/imagev2/trade/700x700.109343b6dd704ee18ea33c3ff44e565b.310x310.jpg.webp',
            introduce: '优品|签收不粘锅炒锅32cm区数据回家',
            price: '28.9',
            discount: '1.5折'
        },
        {
            imgurl: '//z13.tuanimg.com/imagev2/trade/700x700.109343b6dd704ee18ea33c3ff44e565b.310x310.jpg.webp',
            introduce: '优品|签收不粘锅炒锅32cm区数据回家',
            price: '28.9',
            discount: '1.5折'
        },
        {
            imgurl: '//z13.tuanimg.com/imagev2/trade/700x700.109343b6dd704ee18ea33c3ff44e565b.310x310.jpg.webp',
            introduce: '优品|签收不粘锅炒锅32cm区数据回家',
            price: '28.9',
            discount: '1.5折'
        }
    ],
    ThemeList: {
        themelistt: [{
            imgurl: '//z11.tuanimg.com/imagev2/wxyy/750x286.955bf255e39ec1b630b6e4c45c86db10.jpg',
            iconurl: '//z3.tuanimg.com/imagev2/wxyy/90x90.bbd79ca51d8f6c79d94255196afb550b.png',
            tabname: '签约领红包'
        }, {
            imgurl: '//z11.tuanimg.com/imagev2/wxyy/750x286.955bf255e39ec1b630b6e4c45c86db10.jpg',
            iconurl: '//z3.tuanimg.com/imagev2/wxyy/90x90.84f55d5c8bdf53b89e5191a251a92c71.png',
            tabname: '9.9包邮'
        }, {
            imgurl: '//z11.tuanimg.com/imagev2/wxyy/750x286.955bf255e39ec1b630b6e4c45c86db10.jpg',
            iconurl: '//z11.tuanimg.com/imagev2/wxyy/90x90.44b033e118f9e26baa70cc33e8b4a9f5.png',
            tabname: '有品质'
        }, {
            imgurl: '//z11.tuanimg.com/imagev2/wxyy/750x286.955bf255e39ec1b630b6e4c45c86db10.jpg',
            iconurl: '//z11.tuanimg.com/imagev2/wxyy/90x90.7a9f9149946bedc6a6533bc0f5b12b90.png',
            tabname: '品牌团'
        }, {
            imgurl: '//z11.tuanimg.com/imagev2/wxyy/750x286.955bf255e39ec1b630b6e4c45c86db10.jpg',
            iconurl: '//z11.tuanimg.com/imagev2/wxyy/180x180.7a400ba19594dfd70c5f11eb6ad6f5a8.png',
            tabname: '热销榜'
        }],
        threeBanner: [{
            imgurl: '//z11.tuanimg.com/imagev2/wxyy/375x376.2ac6c0563654d5c7e5efdef4bed23417.jpg'
        }, {
            imgurl: '//z11.tuanimg.com/imagev2/wxyy/375x188.0c2b8a8d83e9c6a962f052afe82085e4.jpg'
        }, {
            imgurl: '//z11.tuanimg.com/imagev2/wxyy/375x188.0c2b8a8d83e9c6a962f052afe82085e4.jpg'
        }]
    }
}

import mock from 'mockjs'
var Random = mock.Random
var dataList={
  bannerList:[],
  itemList:[],
  explosionData:[],
  newPeopleimg:'',
  threeList:[],
  brandData:[]
}
for(var i=0;i<40;i++){
  let data=mock.mock({
    "imgurl|1":['http://localhost:8080/static/images/1.jpg','http://localhost:8080/static/images/2.jpg'],
    "introduce|1":Random.csentence(6, 14),
    "price|1-50":50,
    "discount|1": ['1.5折','2折','7.5折','9折'],
    "oldPrice|1-100":100,
    "state":false,
    "id|+1":1,
    "man|1":['满减','爆款','满折']
  })
  dataList.explosionData.push(data)
}
for(var i=0;i<40;i++){
  let data=mock.mock({
    "imgurl|1":['http://localhost:8080/static/images/3.jpg','http://localhost:8080/static/images/4.jpg'],
    "introduce|1":Random.csentence(6, 14),
    "price|1-50":50,
    "discount|1": ['1.5折','2折','7.5折','9折'],
    "oldPrice|1-100":100,
    "state":false,
    "id|+1":1,
    "man|1":['满减','爆款','满折']
  })
  dataList.brandData.push(data)
}
for(var i=0;i<5;i++){
  let data=mock.mock({
    "imgurl|1":['http://localhost:8080/static/images/5.jpg','http://localhost:8080/static/images/6.jpg','http://localhost:8080/static/images/7.jpg','http://localhost:8080/static/images/8.jpg'],
  })
  dataList.bannerList.push(data)
}
for(var i=0;i<5;i++){
  let data=mock.mock({
    "imgurl|1":['http://localhost:8080/static/images/a1.jpg','http://localhost:8080/static/images/a2.jpg','http://localhost:8080/static/images/a3.jpg','http://localhost:8080/static/images/a4.jpg'],
    "name":Random.cword(3,5)
  })
  dataList.itemList.push(data)
}
dataList.newPeopleimg='http://localhost:8080/static/images/new.jpg'
dataList.threeList=[
  {'imgurl':'http://localhost:8080/static/images/t1.jpg'},
  {'imgurl':'http://localhost:8080/static/images/t2.jpg'},
  {'imgurl':'http://localhost:8080/static/images/t3.jpg'}
]

console.log(dataList)
export default dataList;
