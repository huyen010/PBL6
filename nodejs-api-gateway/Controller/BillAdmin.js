const axios = require('axios');
const getData = require('../Config/GetData.js');

const { create } = axios

const headers = {
  Accept: 'application/json'
}

const service = 'http://206.189.146.194:3002'

exports.getAllBill = (req, res) => {
  method = 'get'
  const page = req.params.page
  path = `${service}/api/v1/cms/bill/all/${page}`
  const api = create({
    baseURL: path,
    timeout: 1000,
    headers
  })
    getData(req, res, api, headers, method, path)
  }

  exports.updateBill = (req, res) => {
    method = 'put'
    const id = req.params.id;
    path = `${service}/api/v1/cms/bill/update/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.cancelBill = (req, res) => {
    method = 'post'
    const id = req.params.id;
    path = `${service}/api/v1/cms/bill/cancel/${id}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.updateManyBill = (req, res) => {
    method = 'delete'
    const id = req.params.id;
    path = `${service}/api/v1/cms/bill/update-many`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }

  exports.getBillInfor = (req, res) => {
    method = 'delete'
    const status = req.params.status;
    const delivery = req.params.delivery;
    const page = req.params.page;
    path = `${service}/api/v1/cms/bill/type/${status}/${delivery}/${page}`
    const api = create({
      baseURL: path,
      timeout: 1000,
      headers
    })
    getData(req, res, api, headers, method, path)
  }