const express = require('express')
const router = express.Router();
const { addProduct, getAllProduct, adminGetAllProducts, getOneProduct, adminUpdateOneProduct, adminDeleteOneProduct, addReview, getOnlyReviewsForOneProduct, deleteReview} = require("../controllers/productController");
const {
    isLoggedIn,
    customRole
} = require('../middleware/user')
//user
router.route("/products").get(getAllProduct);
router.route("/product/:id").get(getOneProduct);
router.route("/review").put(isLoggedIn, addReview);
router.route("/review").delete(isLoggedIn, deleteReview);
router.route("/review").get(getOnlyReviewsForOneProduct);



//admin
router
    .route("/admin/product/add")
    .post(isLoggedIn, customRole("admin"), addProduct);

router
    .route("/admin/products")
    .get(isLoggedIn, customRole('admin'), adminGetAllProducts);
    
router
    .route("/admin/product/:id")
    .put(isLoggedIn, customRole('admin'), adminUpdateOneProduct)
    .delete(isLoggedIn, customRole('admin'), adminDeleteOneProduct);
module.exports = router;