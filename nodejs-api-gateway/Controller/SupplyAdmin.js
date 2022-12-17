const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

const service = 'http://localhost:3002'

exports.createSupply = (req, res) => {
  method = 'post'
  path = `${service}/api/v1/cms/supplies/insert`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

  exports.deleteSupply = (req, res) => {
    method = 'delete'
    const id = req.params.id;
    path = `${service}/api/v1/cms/supplies/delete/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getAll = (req, res) => {
    method = 'get'
    const page = req.params.page;
    path = `${service}/api/v1/cms/supplies/all/${page}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getDetail = (req, res) => {
    method = 'delete'
    const id = req.params.id;
    path = `${service}/api/v1/cms/supplies/detail/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getRepresentative = (req, res) => {
    method = 'get'
    const id = req.params.id;
    path = `${service}/api/v1/cms/supplies/representative/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.updateSupply = (req, res) => {
    method = 'put'
    const id = req.params.id;
    path = `${service}/api/v1/cms/supplies/update/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getProduct = (req, res) => {
    method = 'get'
    const id = req.params.id;
    path = `${service}/api/v1/cms/supplies/product/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }
