const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

const service = 'http://localhost:3002'

exports.getAllCategory = (req, res) => {
  method = 'get'
  path = `${service}/api/v1/cms/categories/all`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

  exports.getCategory = (req, res) => {
    method = 'get'
    const slug = req.params.slug;
    path = `${service}/api/v1/cms/categories/detail/${slug}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.createCategory = (req, res) => {
    method = 'post'
    const id = req.params.id;
    path = `${service}/api/v1/cms/categories/insert`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.updateCategory = (req, res) => {
    method = 'put'
    const slug = req.params.slug;
    path = `${service}/api/v1/cms/categories/update/${slug}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.deleteCategory = (req, res) => {
    method = 'delete'
    const id = req.params.id;
    path = `${service}/api/v1/cms/categories/delete/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }
