import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Chatbot.css";
const companyName = require("../info/info");

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isBotInitiated, setIsBotInitiated] = useState(false);
  const [isChatEnded, setIsChatEnded] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!isBotInitiated) {
      setMessages([{ content: "How can I help you?", sender: "bot" }]);
      setIsBotInitiated(true);
    }
  }, [isBotInitiated]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isChatEnded) {
      return;
    }

    if (inputValue.trim() === "") {
      // Handle empty user message
      return;
    }

    if (!isChatEnded) {
      await sendMessage(inputValue.trim());
      setInputValue("");
    }
  };

  const sendMessage = async (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: message, sender: "user" },
    ]);

    try {
      const response = await axios.post("http://localhost:3000/api/chat", {
        message,
      });
      const chatbotResponse = response.data.message;

      if (!isChatEnded) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: chatbotResponse, sender: "bot" },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setIsChatEnded(true);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          content:
            "Sorry, we're facing technical difficulties.\nPlease enter your email address for us to contact you later.",
          sender: "bot",
        },
      ]);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Do something with the user's email, e.g., send it to the backend for processing
    console.log("User email:", userEmail);
    // Reset the email input field
    setUserEmail("");
  };

  return (
    <div className="chatbot-container">
      <h1 className="chatbot-title">{companyName} AI Chatbot</h1>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === "user" ? "user" : "bot"}`}
          >
            {message.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {!isChatEnded && (
        <form className="chatbot-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      )}
      {isChatEnded && (
        <form className="chatbot-form" onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={userEmail}
            onChange={handleEmailChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Chatbot;
