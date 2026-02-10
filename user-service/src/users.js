const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Bhushan", email: "bhushan@example.com" }
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  user ? res.json(user) : res.status(404).send("User not found");
});

router.post("/", (req, res) => {
  const user = { id: users.length + 1, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

module.exports = router;

