const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

const service = 'http://localhost:3002'

exports.createUser = (req, res) => {
  method = 'post'
  path = `${service}/api/v1/web/users`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

  exports.updateUser = (req, res) => {
    method = 'put'
    const id = req.params.id;
    path = `${service}/api/v1/web/users`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getUser = (req, res) => {
    method = 'get'
    const headers = {
      Accept: 'application/json',
      token: req.header('token')
    }
    const id = req.params.id;
    path = `${service}/api/v1/web/users`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.deleteUser = (req, res) => {
    method = 'delete'
    const id = req.params.id;
    path = `${service}/api/v1/web/users/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  