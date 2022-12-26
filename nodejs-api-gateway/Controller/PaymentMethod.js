const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

const service = 'http://206.189.146.194:3002'

exports.getPaymentMethod = (req, res) => {
  method = 'get'
  path = `${service}/api/v1/web/paymentmethod`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

  exports.createPaymentMethod = (req, res) => {
    method = 'post'
    const id = req.params.id;
    path = `${service}/api/v1/web/paymentmethod`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.updatePaymentMethod = (req, res) => {
    method = 'put'
    const id = req.params.id;
    path = `${service}/api/v1/web/paymentmethod/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.deletePaymentMethod = (req, res) => {
    method = 'delete'
    const id = req.params.id;
    path = `${service}/api/v1/web/paymentmethod/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }
