import { connect } from './db';
import { Todo } from '../models/types'
async function createTodo(todo: Todo) {
  const db = await connect()
  try {
    return await db.todo.create({ data: todo })
  } catch (err) {
    console.log('Postgres error: ', err)
    return null
  }
}
export default createTodo
