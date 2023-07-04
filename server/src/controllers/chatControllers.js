const axios = require("axios");
require("dotenv").config();
const knowledgeBase = require("../knowledgeBase/knowledgeBase");

const postMessage = async (req, res) => {
  const { message } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [...knowledgeBase, { role: "user", content: message }],
        max_tokens: 100,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const chatResponse = response.data.choices[0].message.content.trim();
    res.json({ message: chatResponse });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};

module.exports = {
  postMessage,
};
