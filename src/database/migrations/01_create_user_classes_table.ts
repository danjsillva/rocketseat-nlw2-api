import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("user_classes", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("subject").notNullable();
    table.decimal("cost").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("classes");
}
