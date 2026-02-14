const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// Health endpoint
app.get("/health", (req, res) => {
  res.json({ status: "Auth Service Healthy" });
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { username } = req.body;

  try {
    // Call user-service internally
    const response = await axios.get("http://user-service/users");

    res.json({
      message: `Login successful for ${username}`,
      userDataFromUserService: response.data
    });

  } catch (error) {
    res.status(500).json({ error: "User service unavailable" });
  }
});

app.listen(4000, () => {
  console.log("Auth service running on port 4000");
});

