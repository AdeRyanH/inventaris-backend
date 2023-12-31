/* eslint-disable @typescript-eslint/naming-convention */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Storage from 'App/Models/Storage'

export default class StoragesController {
  public async index ({response}: HttpContextContract) {
    const items = await Storage.all()
    return response.json({
      response: items,
    })
  }

  public async create ({}: HttpContextContract) {}

  public async store ({request,response}: HttpContextContract) {
    const { item_code, item_name, quantity, category_id, ruang_id } = request.body()

    const item = {
      item_code: item_code,
      item_name: item_name,
      quantity: quantity,
      category_id: category_id,
      ruang_id:ruang_id,
    }

    await Storage.create(item)

    return response.json({
      message: 'Data Berhasil Ditambahkan!',
    })
  }

  public async show ({ params }: HttpContextContract) {
    const item = await Storage.find(params.id)
    return item
  }

  public async edit ({}: HttpContextContract) {}

  public async update ({request,params,response}: HttpContextContract) {
    const { item_code, item_name, quantity, category_id, ruang_id } = request.body()

    const item = {
      item_code: item_code,
      item_name: item_name,
      quantity: quantity,
      category_id: category_id,
      ruang_id:ruang_id,
    }

    const item_update = await Storage.findOrFail(params.id)

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
}
