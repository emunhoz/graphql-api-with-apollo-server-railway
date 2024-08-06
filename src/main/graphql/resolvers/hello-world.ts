import { Arg, Query, Resolver } from 'type-graphql'

@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  async log(@Arg('message', () => String) message: string): Promise<string> {
    try {
      return `Hey there! This is the message: ${message}`
    } catch (error) {
      console.error('Error in HelloWorldResolver log query:', error)
      throw new Error('Failed to process log query')
    }
  }
}
