import { connect } from '/opt/client';
import * as models from '/opt/models';
async function createUser(user: models.User) {
  const db = await connect()
  try {
    return await db.user.create({ data: user })
  } catch (err) {
    console.log('Postgres error: ', err)
    return null
  }
}

export default createUser