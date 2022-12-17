const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

const service = 'http://localhost:3002'

exports.createProduct = (req, res) => {
  method = 'post'
  path = `${service}/api/v1/cms/products/insert`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

  exports.updateProduct = (req, res) => {
    method = 'put'
    const id = req.params.id;
    path = `${service}/api/v1/cms/products/update/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.createProductSell = (req, res) => {
    method = 'post'
    const id = req.params.id;
    path = `${service}/api/v1/cms/products/sell-product/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getProductDetail = (req, res) => {
    method = 'get'
    const id = req.params.id;
    path = `${service}/api/v1/cms/products/detail/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.deleteProduct = (req, res) => {
    method = 'delete'
    const id = req.params.id;
    path = `${service}/api/v1/cms/products/delete/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getProducBySlug = (req, res) => {
    method = 'get'
    const slug = req.params.slug;
    const search = req.params.search;
    const page = req.params.page;
    path = `${service}/api/v1/cms/products/${slug}/${search}/${page}}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getProducBySlugAndPage = (req, res) => {
    method = 'get'
    const slug = req.params.slug;
    const page = req.params.page;
    path = `${service}/api/v1/cms/products/${slug}/${page}}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.createDiscount = (req, res) => {
    method = 'post'
    path = `${service}/api/v1/cms/products/discount`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.createProperties = (req, res) => {
    method = 'get'
    path = `${service}/api/v1/cms/products/properties`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }
