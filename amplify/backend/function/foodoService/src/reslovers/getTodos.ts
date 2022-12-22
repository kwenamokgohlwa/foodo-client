import { connect } from './db';
async function getTodos() {
  const db = await connect()
  try {
    return await db.todo.findMany()
  } catch (err) {
    console.log('Postgres error: ', err)
    return null
  }
}

export default getTodos
