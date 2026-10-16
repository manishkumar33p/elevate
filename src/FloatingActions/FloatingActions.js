import React, { useState } from "react";
import "./FloatingActions.css";

const WHATSAPP_NUMBER = "919958424916";

const quickQuestions = [
  "I want to know about your projects",
  "I want a site visit",
  "I want project details",
  "I want to speak with your team",
];

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openWhatsApp = (text = "") => {
    const finalMessage =
      text ||
      "Hello Elevate Infra, I would like to know more about your projects.";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      finalMessage
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const sendChat = () => {
    if (!message.trim()) return;

    openWhatsApp(message.trim());
    setMessage("");
  };

  return (
    <>
      {/* =========================
          LEFT CHATBOT
      ========================= */}
      <div className="floating-chatbot">
        {chatOpen && (
          <div className="chatbot-box">
            <div className="chatbot-header">
              <div>
                <strong>Elevate Assistant</strong>
                <span>How can we help you?</span>
              </div>

              <button
                type="button"
                className="chatbot-close"
                onClick={() => setChatOpen(false)}
                aria-label="Close chatbot"
              >
                ×
              </button>
            </div>

            <div className="chatbot-body">
              <div className="bot-message">
                Hello! Welcome to <strong>Elevate Infra</strong>.
                <br />
                How can we assist you today?
              </div>

              <div className="chatbot-options">
                {quickQuestions.map((question) => (
                  <button
                    type="button"
                    key={question}
                    onClick={() => openWhatsApp(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendChat();
                }}
                placeholder="Type your message..."
              />

              <button type="button" onClick={sendChat}>
                ➤
              </button>
            </div>
          </div>
        )}

        <button
          type="button"
          className={`floating-chat-button ${
            chatOpen ? "chat-open" : ""
          }`}
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Open chat"
        >
          {chatOpen ? "×" : "💬"}
        </button>
      </div>

      {/* =========================
          RIGHT WHATSAPP
      ========================= */}
      <button
        type="button"
        className="floating-whatsapp"
        onClick={() =>
          openWhatsApp(
            "Hello Elevate Infra, I would like to know more about your projects."
          )
        }
        aria-label="Contact Elevate Infra on WhatsApp"
      >
        <span className="whatsapp-icon">◔</span>

        <span className="whatsapp-text">
          <strong>WhatsApp</strong>
          <small>Chat with us</small>
        </span>
      </button>
    </>
  );
}