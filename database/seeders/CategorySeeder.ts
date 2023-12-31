import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public async run () {
    await Category.createMany([
      {
        category: 'Meja',
      },
      {
        category: 'Kursi',
      },
      {
        category: 'Lemari',
      },
      {
        category: 'Pintu',
      },
      {
        category: 'Jendela',
      },
    ])
  }
}
