const express = require("express");
const chatRoutes = require("./routes/chatRoutes");
const cors = require("cors");

const app = express();
const port = 3000;

// Set up body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Set up routes
app.use("/api/chat", chatRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
