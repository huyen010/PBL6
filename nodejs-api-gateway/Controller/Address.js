const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

exports.getProvince = (req, res) => {
  method = 'get'
  path = 'http://localhost:3002/api/v1/web/address/province'
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

  exports.getDistrict = (req, res) => {
    method = 'get'
    const province = req.params.province;
    path = `http://localhost:3002/api/v1/web/address/district/${province}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getCommune = (req, res) => {
    method = 'get'
    const province = req.params.province;
    path = `http://localhost:3002/api/v1/web/address/district/${province}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }
