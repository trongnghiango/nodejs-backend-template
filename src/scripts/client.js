const GreeterClient = require('./modules/greeter-client')

const main = async () => {
  const client = new GreeterClient()

  try {
    const response = await client.sayHello('Node.js')
    console.log('Response:', response)
  } catch (err) {
    console.error('Error:', err)
  }
}

main()
