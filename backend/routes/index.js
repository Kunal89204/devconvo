var express = require("express");
var router = express.Router();
const schema = require("./users");

router.get("/", (req, res) => {
  res.render("index", {title: "hello"})
})

router.post("/users", async (req, res) => {
  try {
    const userData = req.body; // Extract user data from the request body sent by React
    const data = await schema.create(userData); // Create a new user with the received data
    res.json(data); // Respond with the created user data
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Handle errors
  }
});

module.exports = router;
