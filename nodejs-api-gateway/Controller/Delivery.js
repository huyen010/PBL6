const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

exports.createDelivery = async(req, res) => {
  method = 'post'
  path = `http://206.189.146.194:3003/api/v1/cms/deliveries`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
  getData(req, res, api, headers, method, path)
}

exports.getDelivery = async(req, res) => {
  method = 'get'
  path = `http://206.189.146.194:3003/api/v1/cms/deliveries`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
  getData(req, res, api, headers, method, path)
}

exports.getAllDelivery = async(req, res) => {
  method = 'get'
  path = `http://206.189.146.194:3003/api/v1/cms/deliveries/all`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
  getData(req, res, api, headers, method, path)
}

exports.updateDelivery = async(req, res) => {
  const id = req.params.id;
  method = 'put'
  path = `http://206.189.146.194:3003/api/v1/cms/deliveries/${id}`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
  getData(req, res, api, headers, method, path)
}
