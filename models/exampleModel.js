const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: Number,
    deleted: Boolean,
    deletedAt: Date,
});

const Example = mongoose.model('Tên model', exampleSchema, 'tên table');

module.exports = Example;
