const Product = require('../models/product')

module.exports = {
    index,
    new: newProduct,
    create,
    show
};

function show(req, res) {
    Product.findById(req.params.id, function (err, product) {
        res.render('products/show', {
            title: 'Product Details',
            product,
            user: req.user
        });
    })
}

function create(req, res) {
    const product = new Product(req.body);
    product.save(function (err) {
        if (err) return res.redirect('/products.new');
        console.log(product);
        res.redirect('/products/new');
    });
}

function newProduct(req, res) {
    res.render('products/new', {
        user: req.user,
        title: 'Add A Product'
    });
}

function index(req, res) {
    Product.find({}, function (err, products) {
        res.render('products/index', {
            user: req.user,
            title: 'Products', products
        });
    });
}