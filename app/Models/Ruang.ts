import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Storage from './Storage'

export default class Ruang extends BaseModel {
  public static table = 'ruang'
  @column({ isPrimary: true })
  public id: number

  @column()
  public ruang: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany (() => Storage , {
    localKey: 'id',
    foreignKey: 'ruang_id',
  })
  public Storages: HasMany<typeof Storage>
}
