import React, { useState } from "react";
import hamtaro from "../assets/hamtaro.png";
import otherhamster from "../assets/otherhamster.png";
import speech from "../assets/speech.png";

const Hamtaro = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendRequest = async () => {
    try {
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const chatResponse = await response.json();

      // Update chat history with the new response
      setChatHistory([
        ...chatHistory,
        { role: "USER", message: userMessage },
        { role: "CHATBOT", message: chatResponse },
      ]);
      // Clear the input field
      setUserMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        {chatHistory.map((message, index) => (
          <div key={index} className={message.role.toLowerCase()}>
            <div className="flex">
              {message.role == "USER" && (
                <img
                  src={otherhamster}
                  alt="otherhamster"
                  className="flex w-1/4"
                />
              )}

              {message.role == "CHATBOT" && (
                <img src={hamtaro} alt="hamtaro" className="flex w-1/4" />
              )}
              <div className="flex relative w-full">
                <img
                  src={speech}
                  alt="speech"
                  className="absolute top-0 left-0 w-full h-full"
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-xl font-serif">
                  {message.message}
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-xl font-serif">
                  {message.message}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="px-20 py-2 border rounded font-serif"
        />
        <button
          onClick={sendRequest}
          className="ml-2 px-4 py-2 bg-gray-500 text-white font-serif rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Hamtaro;
