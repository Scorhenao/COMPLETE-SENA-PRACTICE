const faker = require("faker");
class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }
  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  find() {
    return this.products;
  }
  findOne(id) {
    return this.products.find((product) => product.id === id);
  }
  update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("product not found");
    }

    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }
  delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("product not found");
    }
    this.products.splice(index, 1);
    return { id };
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        thumbnail: faker.image.imageUrl(),
      });
    }
  }
}

module.exports = ProductsService;
