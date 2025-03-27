const usersRouter = require('./users.router');
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const app = express();
const port = 3005;
function routerApi(app) {
    app.use('/users', usersRouter);
    app.use('/products', productsRouter);
    app.use('/categories', categoriesRouter);
}

app.listen(port, () => {
    console.log("listening on port: " + port);
  });
  

module.exports = routerApi;