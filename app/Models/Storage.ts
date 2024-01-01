import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Ruang from './Ruang'
import Category from './Category'

export default class Storage extends BaseModel {
  public static table = 'storage'
  @column({ isPrimary: true })
  public id: number

  @column()
  public item_code: string

  @column()
  public item_name: string

  @column()
  public quantity: number

  @column()
  public category_id: number

  @column()
  public ruang_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo (() => Ruang, {
    localKey: 'id',
    foreignKey: 'ruang_id',
  })
  public Ruang: BelongsTo<typeof Ruang>

  @belongsTo (() => Category, {
    localKey: 'id',
    foreignKey: 'category_id',
  })
  public Category: BelongsTo<typeof Category>
}
