import axios from 'axios';
import priceData from './Data/priceList'
import MockAdapter from 'axios-mock-adapter'

let mock = new MockAdapter(axios)
mock.onGet('/priceData').reply(() => {
    return new Promise((resolve, reject) => {
        resolve([200, priceData])
    })
})