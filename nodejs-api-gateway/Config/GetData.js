async function GetData(req, res, api, headers, method, path) {

  let data = {}
  if(req.header('token')) {
    headers = {
      Accept: 'application/json',
      token: req.header('token')
    }
  }
  

  let config = { method, headers }
  const body = req.body
  config = { method, headers: { ...headers, 'Content-Type': 'application/json' }, data: body }
  console.log(config);
  try {
    const apirespon = await api(path, config)
    data = apirespon.data
  } catch (error) {
    res.status(400).json({
      message: 'Invalid token',
      status: false
    });
    // data = typeof error.code !== 'undefined' ? error.code : 'Unknown'
  }

  res.json(data)
}
module.exports = GetData;