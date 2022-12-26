const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

const service = 'http://206.189.146.194:3002'

exports.createInforAddress = (req, res) => {
  method = 'post'
  path = `${service}/api/v1/web/inforaddress`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

  exports.getInforAddress = (req, res) => {
    method = 'get'
    const id = req.params.id;
    path = `${service}/api/v1/web/inforaddress`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.updateInforAddress = (req, res) => {
    method = 'put'
    const id = req.params.id;
    path = `${service}/api/v1/web/inforaddress/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.deleteInforAddress = (req, res) => {
    method = 'delete'
    const id = req.params.id;
    path = `${service}/api/v1/web/inforaddress/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }
