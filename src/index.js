const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')

// Tải file proto
const PROTO_PATH = __dirname + '/proto/hello.proto'
const packageDefinition = protoLoader.loadSync(PROTO_PATH)
const helloProto = grpc.loadPackageDefinition(packageDefinition).hello

// Triển khai service
const sayHello = (call, callback) => {
  const name = call.request.name
  callback(null, { message: `Xin chào ${name}!` })
}

// Khởi tạo server
const server = new grpc.Server()
server.addService(helloProto.Greeter.service, { sayHello })

// Lắng nghe cổng 50051
server.bindAsync(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) throw err
    server.start()
    console.log(`Server đang chạy tại port ${port}`)
  },
)
