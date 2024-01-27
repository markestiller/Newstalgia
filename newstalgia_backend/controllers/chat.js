const { CohereClient } = require("cohere-ai");
const { readFile, writeFile } = require("node:fs/promises");

const COHERE_API_KEY = "HgmcY0uMTy8vxWaZPw0od0K8fIH59zlXnQYjDWFp";

const cohere = new CohereClient({
  token: COHERE_API_KEY,
});

const getChatHistory = async () => {
  try {
    const chatHistory = await readFile("./db/history.json");
    return JSON.parse(chatHistory);
  } catch (error) {
    throw new Error("Error reading chat history: " + error.message);
  }
};

const generateResponse = async (message) => {
  try {
    const texts = [];
    const chatHistory = await getChatHistory();

    console.log(chatHistory);

    const stream = await cohere.chatStream({
      model: "command",
      message,
      chatHistory,
      promptTruncation: "AUTO",
      citationQuality: "accurate",
      connectors: [],
      documents: [],
      temperature: 0.7,
    });

    for await (const chat of stream) {
      if (chat.eventType === "text-generation") {
        texts.push(chat.text);
      }
    }

    return texts.join("");
  } catch (error) {
    throw new Error("Error generating response: " + error.message);
  }
};

const addNewMessage = async (userMessage, chatbotMessage) => {
  try {
    const history = await getChatHistory();
    const newUserMessage = {
      role: "USER",
      message: userMessage,
    };
    const newChatbotMessage = {
      role: "CHATBOT",
      message: chatbotMessage,
    };
    const newHistory = [...history, newUserMessage, newChatbotMessage];
    await writeFile("./db/history.json", JSON.stringify(newHistory));
  } catch (error) {
    throw new Error("Error saving message: " + error.message);
  }
};

const sendRequest = async (req, res) => {
  const body = req.body;
  try {
    const chat = await generateResponse(body.query);
    res.json(chat);
    addNewMessage(body.query, chat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { sendRequest };
