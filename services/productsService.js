const faker = require("faker");
class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }
  create() {}
  find() {
    return this.products;
  }
  findOne(id) {
    return this.products.find((product) => product.id === id);
  }
  update() {}
  delete() {}
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
