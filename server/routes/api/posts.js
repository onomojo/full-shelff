const express = require('express')
// const mongodb = require('mongodb')
const router = express.Router()

// // Get Posts
router.get('/', async (req, res) => {
  res.send('Working Things')
})

// // Add Post
// router.post('/', async (req, res) => {
//   const posts = await loadPosts()
//   await posts.insertOne({
//     text: req.body.text,
//     createdAt: new Date()
//   })
//   res.status(201).send()
// })

// // Delete Post
// router.delete('/:id', async (req, res) => {
//   const posts = await loadPosts()
//   await posts.deleteOne({
//     _id: new mongodb.ObjectID(req.params.id)
//   })
//   res.status(200).send()
// })

// async function loadPosts() {
//   const client = await mongodb.MongoClient.connect(process.env.MAIN_DB, { useNewUrlParser: true })
// }
module.exports = router
