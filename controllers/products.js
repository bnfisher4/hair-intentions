const Product = require('../models/product')

module.exports = {
    index
};

function index(req, res) {
    Product.find({}, function (err, products) {
        res.render('products/index', {
            title: 'Products', products
        });
    });
}