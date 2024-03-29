const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    postDate: { type: Date, default: Date.now }
})
const Articles = mongoose.model('Article', articleSchema)

module.exports = Articles;