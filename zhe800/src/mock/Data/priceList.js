import mock from 'mockjs'
var Random = mock.Random
var dataList = {
    bannerList: [],
    itemList: [],
    explosionData: [],
    newPeopleimg: '',
    threeList: [],
    brandData: [],
    detailData: []
}
for (var i = 0; i < 40; i++) {
    let data = mock.mock({
        "imgurl|1": ['http://localhost:8080/static/images/1.jpg', 'http://localhost:8080/static/images/2.jpg'],
        "introduce|1": Random.csentence(6, 14),
        "price|1-50": 50,
        "discount|1": ['1.5折', '2折', '7.5折', '9折'],
        "oldPrice|1-100": 100,
        "state": false,
        "id": '@increment',
        "man|1": ['满减', '爆款', '满折'],
        "imgurls|1-3": ['http://localhost:8080/static/images/3.jpg', 'http://localhost:8080/static/images/4.jpg'],
    })
    dataList.explosionData.push(data)
}
for (var i = 0; i < 40; i++) {
    let data = mock.mock({
        "imgurl|1": ['http://localhost:8080/static/images/3.jpg', 'http://localhost:8080/static/images/4.jpg'],
        "introduce|1": Random.csentence(6, 14),
        "price|1-50": 50,
        "discount|1": ['1.5折', '2折', '7.5折', '9折'],
        "oldPrice|1-100": 100,
        "state": false,
        "id|+1": 1,
        "man|1": ['满减', '爆款', '满折'],

    })
    dataList.brandData.push(data)
}
for (var i = 0; i < 40; i++) {
    let data = mock.mock({
        "imgurl|1-3": ['http://localhost:8080/static/images/3.jpg', 'http://localhost:8080/static/images/4.jpg'],
        "title": '@csentence',
        "minprice|1-50": 50,
        "payment": '@csentence(0)',
        "maxPrice|1-100": 100,
        "state": false,
        "id": '@increment',
        "man|1": ['包邮', '积分至少减1', '满折']
    })
    dataList.detailData.push(data)
}
for (var i = 0; i < 5; i++) {
    let data = mock.mock({
        "imgurl|1": ['http://localhost:8080/static/images/5.jpg', 'http://localhost:8080/static/images/6.jpg', 'http://localhost:8080/static/images/7.jpg', 'http://localhost:8080/static/images/8.jpg'],
    })
    dataList.bannerList.push(data)
}
for (var i = 0; i < 5; i++) {
    let data = mock.mock({
        "imgurl|1": ['http://localhost:8080/static/images/a1.jpg', 'http://localhost:8080/static/images/a2.jpg', 'http://localhost:8080/static/images/a3.jpg', 'http://localhost:8080/static/images/a4.jpg'],
        "name": Random.cword(3, 5)
    })
    dataList.itemList.push(data)
}
dataList.newPeopleimg = 'http://localhost:8080/static/images/new.jpg'
dataList.threeList = [
    { 'imgurl': 'http://localhost:8080/static/images/t1.jpg' },
    { 'imgurl': 'http://localhost:8080/static/images/t2.jpg' },
    { 'imgurl': 'http://localhost:8080/static/images/t3.jpg' }
]

console.log(dataList)
export default dataList;