const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

exports.getAllStaff = (req, res) => {
  method = 'get'
  path = 'http://206.189.146.194:3001/api/v1/cms/staff'
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

  exports.getStaff = (req, res) => {
    method = 'get'
    const id = req.params.id;
    path = `http://206.189.146.194:3001/api/v1/cms/staff/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.updateStaff = (req, res) => {
    method = 'put'
    const id = req.params.id;
    path = `http://206.189.146.194:3001/api/v1/cms/staff/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.deleteStaff = (req, res) => {
    method = 'delete'
    const id = req.params.id;
    path = `http://206.189.146.194:3001/api/v1/cms/staff/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }
