import { connect } from './db';
import { Todo } from '../models/types'
async function getTodo(id: Todo['id']) {
  const db = await connect()
  try {
    return await db.todo.findUnique({
      where: {
        id,
      }
    })
  } catch (err) {
    console.log('Postgres error: ', err)
    return null
  }
}

export default getTodo
