/* eslint-disable padded-blocks */
/* eslint-disable @typescript-eslint/naming-convention */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'
import { schema,rules } from '@ioc:Adonis/Core/Validator'

export default class CategoriesController {
  public async index ({response}: HttpContextContract) {
    const categoies = await Category.all()
    return response.json({
      response: categoies,
    })
  }

  public async create ({}: HttpContextContract) {}

  public async store ({request,response}: HttpContextContract) {
    const newPostSchema = schema.create({
      category: schema.string([
        rules.unique({ table: 'category', column: 'category'}),
      ]),
    })

    const category = await request.validate({ schema: newPostSchema })
    await Category.create(category)

    return response.json({
      message: 'Category Baru Berhasil Ditambahkan!',
    })
  }

  public async show ({params,response}: HttpContextContract) {
    const category = await Category.find(params.id)
    return response.json({
      response: category,
    })
  }

  public async edit ({}: HttpContextContract) {}

  public async update ({request,response,params}: HttpContextContract) {

    const category_update = await Category.findOrFail(params.id)

    const newPostSchema = schema.create({
      category: schema.string([
        rules.unique({ table: 'category', column: 'category', whereNot: { category: category_update.category }}),
      ]),
    })

    const category = await request.validate({ schema: newPostSchema })
    category_update.merge(category)
    category_update.save()

    return response.json({
      message: 'Category Berhasil Diperbarui!',
    })
  }

  public async destroy ({response,params}: HttpContextContract) {
    const category = await Category.findOrFail(params.id)
    category.delete()

    return response.json({
      message: 'Category Berhasil Dihapus',
    })
  }
}
