
exports.up = async function(knex) {
  await knex.schema.createTable("car_shop", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table.text("description")
      table.boolean("completed").notNull().defaultTo(false)
  })
  await knex.schema.createTable("cars", (table) => {
      table.increments("id")
      table.text("description").notNull()
      table.text("notes")
      table.boolean("completed").notNull().defaultTo(false)
      table.integer("shop_id").notNull().references("id").inTable("car_shop").onDelete("CASCADE").onUpdate("CASCADE")
  })
  await knex.schema.createTable("tools", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table.text("description")
  })
  await knex.schema.createTable("shop_tools", (table) => {
      table.increments("id")
      table.integer("shop_id").references("id").inTable("car_shop").onDelete("CASCADE").onUpdate("CASCADE")
      table.integer("tool_id").references("id").inTable("tools").onDelete("CASCADE").onUpdate("CASCADE")
  })

}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("shop_tools")
    await knex.schema.dropTableIfExists("car_shop")
    await knex.schema.dropTableIfExists("cars")
    await knex.schema.dropTableIfExists("tools") 
}
