import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Ruang from 'App/Models/Ruang'

export default class extends BaseSeeder {
  public async run () {
    await Ruang.createMany([
      {
        ruang: 'Gudang 1',
      },
      {
        ruang: 'Gudang 2',
      },
      {
        ruang: 'Gudang 3',
      },
      {
        ruang: 'Gudang 4',
      },
      {
        ruang: 'Gudang 5',
      },
      {
        ruang: 'Gudang 6',
      },
    ])
  }
}
