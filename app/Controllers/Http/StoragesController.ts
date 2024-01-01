/* eslint-disable @typescript-eslint/indent */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/naming-convention */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema,rules } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'
import Storage from 'App/Models/Storage'

export default class StoragesController {
  public async index ({response}: HttpContextContract) {
    const items = await Storage.query().preload('Category').preload('Ruang')
    return response.json({
      response: items,
    })
  }

  public async create ({}: HttpContextContract) {}

  public async store ({request,response}: HttpContextContract) {
    const newPostSchema = schema.create({
      item_code: schema.string([
        rules.unique({ table: 'storage', column: 'item_code'}),
      ]),
      item_name: schema.string(),
      quantity: schema.number(),
      category_id: schema.number(),
      ruang_id: schema.number(),
    })

    const item = await request.validate({ schema: newPostSchema })
    await Storage.create(item)

    return response.json({
      message: 'Data Berhasil Ditambahkan!',
    })
  }

  public async show ({ params,response }: HttpContextContract) {
    const item = await Storage.query().where('id' , params.id).preload('Category').preload('Ruang')
    return response.json({
      response: item,
    })
  }

  public async edit ({}: HttpContextContract) {}

  public async update ({request,params,response}: HttpContextContract) {

    const item_update = await Storage.findOrFail(params.id)

    const newPostSchema = schema.create({
      item_code: schema.string([
        rules.unique({ table: 'storage', column: 'item_code', whereNot: { item_code: item_update.item_code }}),
      ]),
      item_name: schema.string(),
      quantity: schema.number(),
      category_id: schema.number(),
      ruang_id: schema.number(),
    })

    const item = await request.validate({ schema: newPostSchema })

    item_update.merge(item)
    item_update.save()

    return response.json({
      message: 'Data Berhasil Diperbarui!',
    })
  }

  public async destroy ({params,response}: HttpContextContract) {
    const item = await Storage.findOrFail(params.id)
    await item.delete()
    return response.json({
      message: 'Data Berhasil Terhapus!',
    })
  }

  public async search ({request,response}: HttpContextContract) {
    const { search } = request.body()
    const item = await Storage
    .query()
    .whereLike('item_name' ,'%' + search + '%')
    .orWhereLike('item_code' ,'%' + search + '%')
    .preload('Category')
    .preload('Ruang')

    return response.json({
      response: item,
    })
  }
}
