import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Storage from './Storage'

export default class Category extends BaseModel {
  public static table = 'category'
  @column({ isPrimary: true })
  public id: number

  @column()
  public category: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany (() => Storage)
  public Storages: HasMany<typeof Storage>
}
