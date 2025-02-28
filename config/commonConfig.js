const { NODE_ENV, PORT, HOST, HOST_URL } = process.env

console.log({PORT, NODE_ENV})
module.exports = {
  port: parseInt(PORT),
  host: HOST,
  url: HOST_URL,
  env: NODE_ENV,
}
