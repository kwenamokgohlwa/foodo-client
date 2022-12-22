import { connect } from '/opt/client';
import * as models from '/opt/models';

async function getUser(owner: models.User['owner']) {
  const db = await connect()
  try {
    return await db.user.findUnique({
      where: {
        owner,
      },
      include: {
        todos: true,
      },
    })
  } catch (err) {
    console.log('Postgres error: ', err)
    return null
  }
}

export default getUser