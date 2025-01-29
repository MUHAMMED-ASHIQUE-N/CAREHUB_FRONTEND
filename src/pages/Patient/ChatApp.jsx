import React, { useState } from "react"; // Add this import
import { Send, Search, Smile, ArrowLeft } from "lucide-react";

// Sidebar Component
const Sidebar = ({ users, search, setSearch, onUserClick, sidebarVisible }) => (
  <div className={`w-full md:w-1/4 bg-white rounded-l-md border-r p-4 flex flex-col ${sidebarVisible ? '' : 'md:hidden'}`}>
    <div className="relative mb-4">
      <input
        type="text"
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Search size={18} className="absolute right-2 top-2 text-gray-500" />
    </div>

    <ul className="flex-1 overflow-y-auto scrollbar-hide" style={{ maxHeight: 'calc(100vh - 75px)' }}>
      {users.map((user, index) => (
        <li
          key={index}
          className="p-2 border-b cursor-pointer hover:bg-[#e0e0e0] flex items-center space-x-3"
          onClick={() => onUserClick(user)}
        >
          <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full border border-[#0077b6]" />
          <span>{user.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

// ChatHeader Component
const ChatHeader = ({ currentUser, onBackClick }) => (
  <div className="bg-primaryColor text-white text-lg font-bold p-4 flex  items-center space-x-3">
    <div className="md:hidden">
      <button onClick={onBackClick} className="text-white">
        <ArrowLeft size={24} />
      </button>
    </div>
    <img src={currentUser.image} alt={currentUser.name} className="w-8 h-8 rounded-full border border-white" />
    <span>{currentUser.name}</span>
  </div>
);

// MessageList Component
const MessageList = ({ messages }) => (
  <div className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-hide" style={{ maxHeight: 'calc(100vh - 200px)' }}>
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`px-5 py-3 rounded-lg max-w-max ${msg.sender === "You" ? "bg-[#0077b6] text-white self-end ml-auto" : "bg-[#cce5ff] text-[#333]"}`}
      >
        {msg.text}
      </div>
    ))}
  </div>
);

// MessageInput Component
const MessageInput = ({ input, setInput, sendMessage }) => (
  <div className="flex items-center p-4 border-t bg-white fixed bottom-0 w-full md:w-[75%]">
    <Smile size={24} className="text-gray-500 mr-2 cursor-pointer" />
    <input
      type="text"
      className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
      placeholder="Type a message..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
    />
    <button onClick={sendMessage} className="ml-2 bg-[#0077b6] text-white p-2 rounded-lg hover:bg-[#005f73] transition-all">
      <Send size={20} />
    </button>
  </div>
);

// Main ChatApp Component
export default function ChatApp() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "Bot" },
  ]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [users] = useState([
    { name: "Alice", image: "https://via.placeholder.com/40" },
    { name: "Bob", image: "https://via.placeholder.com/40" },
    { name: "Charlie", image: "https://via.placeholder.com/40" },
    // Add more users as needed
  ]);
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "You" }]);
    setInput("");
    
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "This is a bot response!", sender: "Bot" },
      ]);
    }, 1000);
  };

  const onUserClick = (user) => {
    setCurrentUser(user);
    // Hide sidebar only on screens below `md`
    if (window.innerWidth < 768) {
      setSidebarVisible(false);
    }
  };

  const onBackClick = () => {
    setSidebarVisible(true);
  };

  return (
    <div className="flex flex-col h-screen bg-[#f7f7f7]">
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          users={users}
          search={search}
          setSearch={setSearch}
          onUserClick={onUserClick}
          sidebarVisible={sidebarVisible}
        />

        {/* Chat Area */}
        <div
          className={`flex flex-col flex-1 ${
            sidebarVisible ? 'md:w-[75%]' : 'w-full'
          }`}
          style={{ display: window.innerWidth < 768 && sidebarVisible ? 'none' : 'flex' }}
        >
          <div>
            <ChatHeader currentUser={currentUser} onBackClick={onBackClick} />
            <MessageList messages={messages} />
            <MessageInput input={input} setInput={setInput} sendMessage={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}