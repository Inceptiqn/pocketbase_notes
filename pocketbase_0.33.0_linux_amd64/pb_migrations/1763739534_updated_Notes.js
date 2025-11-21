/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_194787171")

  // update field
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_194787171")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "bool193696664",
    "name": "synced",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
