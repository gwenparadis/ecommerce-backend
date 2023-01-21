// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  // Define an alias for when data is retrieved
  foreignKey: "product_tag",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  // Define an alias for when data is retrieved
  foreignKey: "tag_product",
});

//category has many products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

//exports
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
