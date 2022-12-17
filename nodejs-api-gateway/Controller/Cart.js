const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

const service = 'http://localhost:3002'

exports.getCart = (req, res) => {
  method = 'get'
  path = `${service}/api/v1/web/cart`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

  exports.createCart = (req, res) => {
    method = 'post'
    const id = req.params.id;
    path = `${service}/api/v1/web/cart/insert`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.updateCart = (req, res) => {
    method = 'put'
    const id = req.params.id;
    path = `${service}/api/v1/web/cart/update`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.deleteCart = (req, res) => {
    method = 'delete'
    const id = req.params.id;
    path = `${service}/api/v1/web/cart/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }
