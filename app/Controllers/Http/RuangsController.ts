/* eslint-disable @typescript-eslint/naming-convention */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema,rules } from '@ioc:Adonis/Core/Validator'
import Ruang from 'App/Models/Ruang'

export default class RuangsController {
  public async index ({response}: HttpContextContract) {
    const ruangs = await Ruang.all()
    response.json({
      response: ruangs,
    })
  }

  public async create ({}: HttpContextContract) {}

  public async store ({request,response}: HttpContextContract) {
    const newPostSchema = schema.create({
      ruang: schema.string([
        rules.unique({ table: 'ruang', column: 'ruang'}),
      ]),
    })

    const ruang = await request.validate({ schema: newPostSchema })
    await Ruang.create(ruang)

    return response.json({
      message: 'Ruang Baru Berhasil Ditambahkan!',
    })
  }

  public async show ({params,response}: HttpContextContract) {
    const ruang = await Ruang.find(params.id)
    return response.json({
      response: ruang,
    })
  }

  public async edit ({}: HttpContextContract) {}

  public async update ({request,response,params}: HttpContextContract) {
    const ruang_update = await Ruang.findOrFail(params.id)

    const newPostSchema = schema.create({
      ruang: schema.string([
        rules.unique({ table: 'ruang', column: 'ruang', whereNot: { ruang: ruang_update.ruang }}),
      ]),
    })

    const ruang = await request.validate({ schema: newPostSchema })
    ruang_update.merge(ruang)
    ruang_update.save()

    return response.json({
      message: 'Category Berhasil Diperbarui!',
    })
  }

  public async destroy ({response,params}: HttpContextContract) {
    const ruang = await Ruang.findOrFail(params.id)
    ruang.delete()

    return response.json({
      message: 'Ruang Berhasil Dihapus',
    })
  }
}
