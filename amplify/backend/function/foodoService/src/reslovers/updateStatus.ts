import { connect } from './db';
import { Todo } from '../models/types'
async function updateStatus(id: Todo['id'], complete: Todo['complete']) {
  const db = await connect()
  try {
    return await db.todo.update({ where: { id }, data: { complete } })
  } catch (err) {
    console.log('Postgres error: ', err)
    return null
  }
}

export default updateStatus
