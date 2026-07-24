import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const playerTable = pgTable("players", {
    id: uuid().primaryKey().defaultRandom(),
    name: varchar().notNull(),
    email: varchar().notNull().unique()
})