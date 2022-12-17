const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

const service = 'http://localhost:3002'

exports.createComment = (req, res) => {
  method = 'post'
  path = `${service}/api/v1/web/comment`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

  exports.updateComment = (req, res) => {
    method = 'put'
    const id = req.params.id;
    path = `${service}/api/v1/web/comment/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getCommentByProduct = (req, res) => {
    method = 'get'
    const id_product = req.params.id_product;
    path = `${service}/api/v1/web/comment/${id_product}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }
