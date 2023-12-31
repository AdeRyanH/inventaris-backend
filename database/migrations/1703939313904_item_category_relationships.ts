import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'storage'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('category_id').unsigned().references('id').inTable('category').onDelete('CASCADE').after('quantity')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('category_id')
    })
  }
}
