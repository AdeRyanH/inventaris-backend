import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Storage from 'App/Models/Storage'

export default class extends BaseSeeder {
  public async run () {
    await Storage.createMany([
      {
        item_code: 'MJ-122',
        item_name: 'Meja Kayu',
        quantity: 20,
        category_id: 1,
        ruang_id: 2,
      },
      {
        item_code: 'MJ-123',
        item_name: 'Meja Besi',
        quantity: 30,
        category_id: 1,
        ruang_id: 3,
      },
      {
        item_code: 'MJ-123',
        item_name: 'Meja Plastik',
        quantity: 46,
        category_id: 1,
        ruang_id: 5,
      },
      {
        item_code: 'KS-122',
        item_name: 'Kursi Kayu',
        quantity: 23,
        category_id: 2,
        ruang_id: 2,
      },
      {
        item_code: 'KS-123',
        item_name: 'Kursi Besi',
        quantity: 26,
        category_id: 2,
        ruang_id: 3,
      },
      {
        item_code: 'KS-123',
        item_name: 'Kursi Plastik',
        quantity: 44,
        category_id: 2,
        ruang_id: 5,
      },
      {
        item_code: 'LM-13',
        item_name: 'Lemari Kayu',
        quantity: 14,
        category_id: 3,
        ruang_id: 1,
      },
      {
        item_code: 'LM-14',
        item_name: 'Lemari Kaca',
        quantity: 23,
        category_id: 3,
        ruang_id: 1,
      },
      {
        item_code: 'LM-15',
        item_name: 'Lemari Besi',
        quantity: 8,
        category_id: 3,
        ruang_id: 1,
      },
      {
        item_code: 'JD-24',
        item_name: 'Jendela Kayu',
        quantity: 31,
        category_id: 5,
        ruang_id: 4,
      },
      {
        item_code: 'JD-25',
        item_name: 'Jendela Kaca',
        quantity: 44,
        category_id: 5,
        ruang_id: 4,
      },
      {
        item_code: 'PT-56',
        item_name: 'Pintu Kayu',
        quantity: 56,
        category_id: 4,
        ruang_id: 5,
      },
    ])
  }
}
