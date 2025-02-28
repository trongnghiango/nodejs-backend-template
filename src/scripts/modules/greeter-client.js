const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')

// Cấu hình kết nối
const PROTO_PATH = __dirname + '/../../proto/hello.proto'
const SERVER_URL = 'localhost:50051'

class GreeterClient {
  constructor(serverUrl = SERVER_URL) {
    this.proto = this.loadProto()
    this.client = new this.proto.Greeter(
      serverUrl,
      grpc.credentials.createInsecure(),
    )
  }

  loadProto() {
    const packageDefinition = protoLoader.loadSync(PROTO_PATH)
    return grpc.loadPackageDefinition(packageDefinition).hello
  }

  sayHello(name) {
    return new Promise((resolve, reject) => {
      this.client.sayHello({ name }, (err, response) => {
        if (err) reject(err)
        else resolve(response.message)
      })
    })
  }
}

module.exports = GreeterClient
