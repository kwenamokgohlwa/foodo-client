import * as resolver from './resolvers'
import { User } from './models/types'

type AppSyncEvent = {
  info: {
    fieldName: string
  },
  arguments: {
    user: User
  },
}

exports.handler  = async (event: AppSyncEvent, context: any) => {
  context.callbackWaitsForEmptyEventLoop = false

  switch (event.info.fieldName) {
    case 'signUp':
      return await resolver.createUser(event.arguments.user)
    case 'signIn':
      return await resolver.getUser(event.arguments.user.owner)
    default:
      return null
  }
}
