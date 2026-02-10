const express = require("express");
const usersRouter = require("./users");

const app = express();
app.use(express.json());

app.use("/users", usersRouter);

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`user-service running on port ${PORT}`);
});
