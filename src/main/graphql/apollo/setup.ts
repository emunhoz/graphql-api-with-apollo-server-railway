import { ApolloServer } from '@apollo/server'
import { buildSchema } from 'type-graphql'
import { startStandaloneServer } from '@apollo/server/standalone'
import { HelloWorldResolver } from '../resolvers/hello-world'

export async function configureApolloServer() {
  try {
    const schema = await buildSchema({
      resolvers: [HelloWorldResolver],
    })

    return new ApolloServer({ schema })
  } catch (error) {
    console.error('Error configuring Apollo Server:', error)
    throw error
  }
}

export async function startApolloServer(server: ApolloServer) {
  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port: Number(process.env.PORT) || 4000 },
    })

    console.log(`🚀 Server ready at ${url}`)
  } catch (error) {
    console.error('Error starting Apollo Server:', error)
    throw error
  }
}
