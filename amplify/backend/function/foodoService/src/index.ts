import * as resolver from './reslovers'
import { Todo } from './models/types'

type AppSyncEvent = {
  info: {
    fieldName: string
  },
  arguments: {
    todo: Todo,
  },
}

exports.handler = async (event: AppSyncEvent, context: any) => {
  context.callbackWaitsForEmptyEventLoop = false

  switch (event.info.fieldName) {
    case 'listTodos' || 'syncTodos':
      return await resolver.getTodos()
    case 'createTodos':
      return await resolver.createTodo(event.arguments.todo)
    case 'markTodoComplete':
      return await resolver.updateStatus(event.arguments.todo.id, true)
    case 'markTodoIncomplete':
      return await resolver.updateStatus(event.arguments.todo.id, false)
    case 'deleteTodo':
      return await resolver.deleteTodo(event.arguments.todo.id)
    default:
      return null
  }
}
