import 'reflect-metadata'
import { configureApolloServer, startApolloServer } from './main/graphql/apollo/setup'

async function startServer() {
  try {
    const server = await configureApolloServer()
    await startApolloServer(server)
  } catch (error) {
    console.error('Error starting the server:', error)
    process.exit(1)
  }
}

startServer()
