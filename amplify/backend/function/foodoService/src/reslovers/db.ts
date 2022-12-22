import { PrismaClient } from './opt/prisma'

let db: PrismaClient

export const connect = async () => {
  if ( db ) return db

  const url = 'postgres://caticpwi:xUKe9P4JXGv6O9no7wmUPB_I0gYn-pf1@isilo.db.elephantsql.com/caticpwi?connect_timeout=300';

  db = new PrismaClient({
    datasources: { db: { url } },
  })

  return db
}

