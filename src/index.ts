import 'reflect-metadata'
import { setupApolloServer } from './main/graphql/apollo/setup'

async function main() {
  await setupApolloServer()
}

main()
