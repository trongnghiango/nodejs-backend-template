const app = require('@/app')
const config = require('../config')
const logger = require('logger')

const { port } = config

async function server ()  {
    // Schema và Resolvers
    // const typeDefs = gql` type Query { hello: String } `;
    // const resolvers = { Query: { hello: () => 'Xin chào!' } };
    //
    // // Khởi tạo Apollo Server
    // const apolloServer = new ApolloServer({ typeDefs, resolvers });
    //
    // // Bắt buộc phải chờ server khởi động
    // await apolloServer.start();
    //
    // // Áp dụng middleware vào Express
    // apolloServer.applyMiddleware({ app, path: '/graphql' });

    // await graphqlServer(app)

    app.listen(port, () => {
        logger.info(`Listening: http://localhost:${port}`)
    })


}

server().catch((error) => {
    logger.error(`Error startup server - ${error}`)
})
