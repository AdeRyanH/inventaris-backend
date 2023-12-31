/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('storage', 'StoragesController.index')
Route.get('storage/:id', 'StoragesController.show')
Route.post('storage/store', 'StoragesController.store')
Route.put('storage/update/:id', 'StoragesController.update')
Route.delete('storage/destroy/:id', 'StoragesController.destroy')
Route.post('storage/search', 'StoragesController.search')

Route.get('category', 'CategoriesController.index')
Route.get('category/:id', 'CategoriesController.show')
Route.post('category/store', 'CategoriesController.store')
Route.put('category/update/:id', 'CategoriesController.update')
Route.delete('category/destroy/:id', 'CategoriesController.destroy')

Route.get('ruang', 'RuangsController.index')
Route.get('ruang/:id', 'RuangsController.show')
Route.post('ruang/store', 'RuangsController.store')
Route.put('ruang/update/:id', 'RuangsController.update')
Route.delete('ruang/destroy/:id', 'RuangsController.destroy')
