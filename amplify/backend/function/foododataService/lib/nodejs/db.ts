import { PrismaClient } from '@prisma/client'

let db: PrismaClient

export const connect = async () => {
  if ( db ) return db

  const url = 'postgres://mlizbtxf:SJd9lG7hxBxdKtQ4v6CGfVPOsIl2t_86@chunee.db.elephantsql.com/mlizbtxf?schema=public';

  db = new PrismaClient({
    datasources: { db: { url } },
  })

  return db
}

