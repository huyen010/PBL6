const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

const service = 'http://206.189.146.194:3002'

exports.createBill = (req, res) => {
  method = 'post'
  path = `${service}/api/v1/web/bill/insert`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

  exports.getBill = (req, res) => {
    method = 'get'
    const id = req.params.id;
    path = `${service}/api/v1/web/bill/all`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getBillByType = (req, res) => {
    method = 'get'
    const type = req.params.type;
    path = `${service}/api/v1/web/bill/type/${type}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getDetail = (req, res) => {
    method = 'get'
    const id = req.params.id;
    path = `${service}/api/v1/web/bill/detail/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }
