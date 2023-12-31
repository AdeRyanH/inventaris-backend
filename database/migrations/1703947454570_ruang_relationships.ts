import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'storage'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('ruang_id').unsigned().references('id').inTable('ruang').onDelete('CASCADE').after('quantity')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('ruang_id')
    })
  }
}
