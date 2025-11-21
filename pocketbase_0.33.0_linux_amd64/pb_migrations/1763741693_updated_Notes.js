/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_194787171")

  // remove field
  collection.fields.removeById("bool193696664")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_194787171")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "bool193696664",
    "name": "synced",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
