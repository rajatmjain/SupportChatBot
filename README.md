# Support Chatbot

Welcome to the Support Chatbot! This project provides a user-friendly interface for interacting with an AI-powered chatbot designed to provide support and assistance. It allows users to ask questions, seek guidance, and receive responses in real-time.

![Chatbot Screenshot](/path/to/screenshot.png)

## Features

- Conversational chat interface
- AI-powered responses
- User-friendly input and output display
- Seamless integration with backend API
- Responsive design for various devices

## Technologies Used

- React.js: JavaScript library for building user interfaces
- Axios: Promise-based HTTP client for making API requests
- CSS: Styling and layout of the chatbot interface

## Getting Started

To get started with the Support Chatbot, follow these steps:

1. Clone the repository: `git clone https://github.com/rajatmjain/SupportChatBot.git`
2. Install the dependencies for the client: `cd client` then `npm install`
3. Install the dependencies for the server: `cd ../server` then `npm install`
4. Start the client development server: `cd client` then `npm start`
5. Start the server: `cd ../server` then `npm start`
6. Open the chatbot in your browser: `http://localhost:8080`

## Configuration

1. Go to `server/src/knowledgeBase/knowledgeBase.js` to provide context for better responses.
2. Go to `client/src/info` to change the company name.
3. Create an `.env` file in `server` to store your OpenAI API Key. Example: `OPENAI_API_KEY=abcde12345`

## Usage

Enter your message in the input field at the bottom of the chatbot interface.
Press the "Send" button or hit Enter to send your message.
The chatbot will process your message and provide a response.
Continue the conversation by sending additional messages.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request. Let's make the Support Chatbot even better together.
