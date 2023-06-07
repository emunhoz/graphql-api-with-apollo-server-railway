import { Arg, Query, Resolver } from 'type-graphql'

@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  async log(@Arg('message', (type) => String) message: string) {
    return `Hey there! This is the message: ${message}`
  }
}
