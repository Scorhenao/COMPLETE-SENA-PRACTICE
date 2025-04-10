const express = require("express");
const faker = require("faker");
const router = express.Router();
const service = require("../services/usersService");
const { makeToken } = require("../lib/token");
// example of usage http://localhost:3005/usuarios?limit=20&offset=200
router.get("/", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send(`there's no parameters`);
  }
});

router.post("/register", async (req, res) => {
  const data = req.body;
  const { email, password } = data;
  if (!email || !password) {
    return res.status(400).json({
      status: 400,
      message: "email and password are required",
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      status: 400,
      message: "password must be at least 6 characters",
    });
  }
  if (!email.includes("@")) {
    return res.status(400).json({
      status: 400,
      message: "email must be valid",
    });
  }

  const response = await service.create(data);
  res.status(201).json({
    status: 201,
    data: response,
    message: "user created successfully",
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: 400,
      message: "email and password are required",
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      status: 400,
      message: "password must be at least 6 characters",
    });
  }
  if (!email.includes("@")) {
    return res.status(400).json({
      status: 400,
      message: "email must be valid",
    });
  }

  const response = await service.login(email, password);
  res.status(200).json({
    status: 200,
    data: response,
    token: makeToken(response),
    message: "user logged in successfully",
  });
});

module.exports = router;
