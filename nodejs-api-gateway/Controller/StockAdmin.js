const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

const service = 'http://206.189.146.194:3002'

exports.createStock = (req, res) => {
  method = 'post'
  path = `${service}/api/v1/cms/stock/insert`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

  exports.getStock = (req, res) => {
    method = 'get'
    const page = req.params.page;
    path = `${service}/api/v1/cms/stock/all/${page}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getSupply = (req, res) => {
    method = 'put'
    const id = req.params.id;
    const page = req.params.page;
    path = `${service}/api/v1/cms/stock/supply/${id}/${page}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }