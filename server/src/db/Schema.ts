import { pgTable, integer, text, varchar, doublePrecision } from "drizzle-orm/pg-core"
export const productsTable = pgTable("products", {
    id : integer().primaryKey().generatedAlwaysAsIdentity(),
    name : text().notNull(),
    image: varchar({length: 255}).notNull(),
    description: text(),
    price: doublePrecision().notNull(),
    quantity: integer().notNull(),
})