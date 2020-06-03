const Product = require('../models/product');

const { fetchAllProducts } = require('./utils');

exports.getIndex = (req, res, next) => {
  fetchAllProducts('shop/index', 'Shop', '/', req, res);
};

exports.getProducts = (req, res, next) => {
  fetchAllProducts('shop/product-list', 'All Products', '/products', req, res);
};

// exports.getProduct = (req, res, next) => {
//   Product.findByPk(req.params.productId)
//     .then((product) => {
//       res.render('shop/product-detail', {
//         title: product.title,
//         path: '/products',
//         product
//       });
//     })
//     .catch((err) => console.log(err));
// };

// exports.getCart = (req, res, next) => {
//   req.user
//     .getCart()
//     .then((cart) => cart.getProducts())
//     .then((products) => {
//       res.render('shop/cart', {
//         title: 'Your Cart',
//         path: '/cart',
//         products
//       });
//     })
//     .catch((err) => console.log(err));
// };

// exports.postCart = (req, res, next) => {
//   let fetchedCart;
//   let quantity = 1;
//   req.user
//     .getCart()
//     .then((cart) => {
//       fetchedCart = cart;
//       return cart.getProducts({ where: { id: req.body.productId } });
//     })
//     .then((products) => {
//       if (products.length > 0) {
//         // If the product is already in the cart
//         quantity += products[0].cartItem.quantity;
//         return products[0];
//       }
//       return Product.findByPk(req.body.productId);
//     })
//     .then((product) => {
//       return fetchedCart.addProduct(product, { through: { quantity } });
//     })
//     .then(() => res.redirect('/cart'))
//     .catch((err) => console.log(err));
// };

// exports.postCartDeleteItem = (req, res, next) => {
//   req.user
//     .getCart()
//     .then((cart) => {
//       return cart.getProducts({ where: { id: req.body.productId } });
//     })
//     .then((products) => {
//       return products[0].cartItem.destroy();
//     })
//     .then(() => res.redirect('/cart'))
//     .catch((err) => console.log(err));
// };

// exports.postOrder = (req, res, next) => {
//   let fetchedCart;
//   req.user
//     .getCart()
//     .then((cart) => {
//       fetchedCart = cart;
//       return cart.getProducts();
//     })
//     .then((products) => {
//       return req.user
//         .createOrder()
//         .then((order) => {
//           order.addProducts(
//             products.map((product) => {
//               product.orderItem = { quantity: product.cartItem.quantity };
//               return product;
//             })
//           );
//         })
//         .catch((err) => console.log(err));
//     })
//     .then(() => fetchedCart.setProducts(null))
//     .then(() => res.redirect('/orders'))
//     .catch((err) => console.log(err));
// };

// exports.getOrders = (req, res, next) => {
//   req.user
//     .getOrders({ include: ['products'] })
//     .then((orders) => {
//       res.render('shop/orders', {
//         title: 'Your Orders',
//         path: '/orders',
//         orders
//       });
//     })
//     .catch((err) => console.log(err));
// };
