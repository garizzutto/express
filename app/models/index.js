/*
  Replace this with template of DB desired
*/

const db = []

async function get() {
  return await db;
}

async function post(body) {
  return await db.push(body);
}

module.exports = {
  get,
  post
}