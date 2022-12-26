const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

const service = 'http://206.189.146.194:3002'

exports.getRate = (req, res) => {
  method = 'get'
  const id_product = req.params.id_product
  path = `${service}/api/v1/web/rate/${id_product}`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

