const express = require("express"); //Requiriendo express
const faker = require("faker");
const router = express.Router(); //Creando router con constructor express

// example of usage http://localhost:3005/usuarios?limit=20&offset=200
router.get("/users", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send(`there's no parameters`);
  }
});

module.exports = router;
