import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("class_schedules", (table) => {
    table.increments("id").primary();
    table
      .integer("class_id")
      .notNullable()
      .references("id")
      .inTable("classes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("week_day").notNullable();
    table.string("from").notNullable();
    table.string("to").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("class_schedules");
}
