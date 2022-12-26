const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

const service = 'http://206.189.146.194:3002'

exports.getReset = (req, res) => {
  method = 'get'
  const id = req.params.id;
  path = `${service}/api/v1/web/auth/reset/${id}`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

  exports.register = (req, res) => {
    method = 'post'
    const id = req.params.id;
    path = `${service}/api/v1/web/auth/register`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.activate = (req, res) => {
    method = 'post'
    const token = req.params.token;
    path = `${service}/api/v1/web/auth/activate/${token}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.forgot = (req, res) => {
    method = 'post'
    const id = req.params.id;
    path = `${service}/api/v1/web/auth/forgot`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.reset = (req, res) => {
    method = 'post'
    const id = req.params.id;
    path = `${service}/api/v1/web/auth/reset`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.login = (req, res) => {
    method = 'post'
    const id = req.params.id;
    path = `${service}/api/v1/web/auth/login`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.logout = (req, res) => {
    method = 'get'
    const id = req.params.id;
    path = `${service}/api/v1/web/auth/logout`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }