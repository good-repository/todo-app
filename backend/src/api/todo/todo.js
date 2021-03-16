const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, required: true, default: Date.now },
    finishedAt: { type: Date, required: false, default: null }
})

module.exports = restful.model('Todo', todoSchema)