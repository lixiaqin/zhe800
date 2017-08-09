import axios from 'axios';
import priceData from './Data/priceList'
import classType from './Data/classType'
import MockAdapter from 'axios-mock-adapter'

let mock = new MockAdapter(axios)
mock.onGet('/priceData').reply(() => {
    return new Promise((resolve, reject) => {
        resolve([200, priceData])
    })
})
mock.onGet('/classType').reply(() => {
  return new Promise((resolve, reject) => {
    resolve([200, classType])
  })
})
