import type { AnyPgTable, PgTransaction } from 'drizzle-orm/pg-core'
import type {
  PostgresJsDatabase,
  PostgresJsQueryResultHKT,
} from 'drizzle-orm/postgres-js'
import type { Sql } from 'postgres'

export type Database =
  | (PostgresJsDatabase & { $client: Sql })
  | PgTransaction<PostgresJsQueryResultHKT>

export type PgTable = AnyPgTable

export * from 'drizzle-orm'
export { alias } from 'drizzle-orm/pg-core'
