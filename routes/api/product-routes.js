const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// The `/api/products` endpoint

// get all products
router.get("/", async (req, res) => {
  // find all products
  try {
    const productData = await Product.findAll({
      // be sure to include its associated Category and Tag Data
      include: [{ model: Category, Tag }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one product
router.get("/:id", async (req, res) => {
  // find a single product by its `id`
  try {
    const productData = await Product.findByPk(req.params.id, {
      // be sure to include its associated Category and Tag Data
      include: [{ model: Category, Tag }],
    });

    if (!productData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post("/", async (req, res) => {
  try {
    const newProductData = await Product.create({
      product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock,
      category_id: req.body.category_id,
    });
    res.status(200).json(newProductData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update product
router.put("/:id", async (req, res) => {
  // update product data
  try {
    const productUpdate = await Product.update(req.body, {
      product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock,
      category_id: req.body.category_id,
      where: req.params.product_id,
    });
    res.status(200).json(productUpdate);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete one product by its `id` value
  try {
    const productsData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!productsData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    res.status(200).json(productsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
