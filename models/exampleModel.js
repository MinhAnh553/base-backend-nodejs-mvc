const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const exampleSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        slug: { type: String, slug: 'title', unique: true },
        deleted: {
            type: Boolean,
            default: false,
        },
        deletedAt: Date,
    },
    {
        timestamps: true,
    }
);

const Example = mongoose.model('Tên model', exampleSchema, 'tên table');

module.exports = Example;
