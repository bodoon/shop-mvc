const path = require("path");

const express = require("express");
const { check, body } = require("express-validator/check");

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get("/products", isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  "/add-product",
  isAuth,
  [
    body("title", "Invalid title")
      .isString()
      .isLength({ min: 3, max: 20 })
      .trim(),
    body("description", "Invalid description")
      .isLength({ min: 5, max: 200 })
      .trim(),
    body("price", "Invalid price").isFloat(),
    // body("imageUrl", "Invalid image url").isURL(),
  ],
  adminController.postAddProduct
);

router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

router.post(
  "/edit-product",
  [
    body("title", "Invalid title")
      .isString()
      .isLength({ min: 3, max: 20 })
      .trim(),
    body("description", "Invalid description")
      .isLength({ min: 5, max: 200 })
      .trim(),
    body("price", "Invalid price").isFloat(),
    // body("imageUrl", "Invalid image url").isURL(),
  ],
  isAuth,
  adminController.postEditProduct
);

router.delete("/product/:productId", isAuth, adminController.deleteProduct);

module.exports = router;
