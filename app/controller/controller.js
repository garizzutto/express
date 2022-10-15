const models = require('../models/index.js')

async function get(req, res) {
  res.send(await models.get());
}

async function post(req, res) {
  await models.post(req.body);
  res.sendStatus(201);
}

module.exports = {
  get,
  post
}
