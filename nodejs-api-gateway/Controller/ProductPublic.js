const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

const service = 'http://206.189.146.194:3002'

exports.getListProduct = (req, res) => {
  method = 'get'
  const slug = req.params.slug;
  const page = req.params.page;
  path = `${service}/api/v1/web/products/list/${slug}/${page}`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

  exports.getCountProduct = (req, res) => {
    method = 'get'
    const slug = req.params.slug;
    path = `${service}/api/v1/web/products/count/${slug}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.postSearch = (req, res) => {
    method = 'post'
    const slug = req.params.slug;
    const page = req.params.page;
    path = `${service}/api/v1/web/products/search/${slug}/${page}`
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
    path = `${service}/api/v1/web/products/detail/${slug}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getWishList = (req, res) => {
    method = 'get'
    const page = req.params.page;
    path = `${service}/api/v1/web/products/wish-list/${page}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getSearchSlug = (req, res) => {
    method = 'get'
    const slug = req.params.slug;
    const search = req.params.search;
    const page = req.params.page;
    path = `${service}/api/v1/web/products/search/${slug}/${search}/${page}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }



  