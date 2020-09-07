const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    img: {
        type: String
    },
    brand: {
        type: String,
        required: true
    },
    kind: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);