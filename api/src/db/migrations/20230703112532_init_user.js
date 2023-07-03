export const up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id")
    table.text("display_name")
    table.text("email").notNullable().unique()
    table.text("password_hash").notNullable()
    table.text("password_salt").notNullable()
    table.text("phone_number")
    table.timestamps(true, true, true)
  })
}

export const down = async (knex) => {
  knex.schema.dropTable("users")
}
