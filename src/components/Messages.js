import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Template from "./Template";
import "./../assets/css/messages.css";
import { db } from "./../service/firebase";
import { onValue, ref, remove, set } from "firebase/database";
import firebase from "firebase/compat/app";
import deleteIcon from "./../assets/images/delete_icon.png";

const Messages = () => {
  const currentUser = firebase.auth().currentUser;
  const { id } = useParams();
  const [inputValue, setInputValue] = useState("");
  const [sortedMessages, setSortedMessages] = useState([]);

  useEffect(() => {
    readFromDatabase();
  }, []);

  const readFromDatabase = () => {
    const query = ref(db, "messages");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      const filteredMessages = filterMessages(data);
      const formattedMessages = formatMessages(filteredMessages);
      const sorted = formattedMessages.sort((a, b) => a.timestamp - b.timestamp);
    setSortedMessages(sorted);

    });
  };

  const deleteFromDatabase = (message) => {
    const messageId = message.timestamp;
    const dbRef = ref(db, `/messages/game-${id}/message-${messageId}`);
    remove(dbRef).then(() => console.log("Deleted"));
  };

  const addNewMessageToDatabase = (message) => {
    set(
      ref(db, `/messages/game-${id}/message-${Math.floor(Math.random() * 10)}`),
      message
    );
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    const message = {
      author: currentUser.multiFactor.user.email,
      text: inputValue,
      timestamp: Date.now(),
    };

    addNewMessageToDatabase(message);

    setInputValue("");
  };

  const filterMessages = (messages) => {
    return messages[`game-${id}`] ? messages[`game-${id}`] : [];
  };

  const formatMessages = (messages) => {
    const messagesKeys = Object.keys(messages);
    const formattedMessages = [];
    messagesKeys.forEach((messageKey) => {
      formattedMessages.push(messages[messageKey]);
    });
    return formattedMessages;
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  const getUsernameFromEmail = (email) => {
    const atIndex = email.indexOf("@");
    return email.substring(0, atIndex);
  };

  const groupedMessages = [];

sortedMessages.forEach((message) => {
  const existingGroup = groupedMessages.find(
    (group) =>
      group.author === message.author &&
      formatDate(group.messages[0].timestamp) === formatDate(message.timestamp)
  );

  if (existingGroup) {
    existingGroup.messages.push(message);
  } else {
    groupedMessages.push({
      author: message.author,
      messages: [message],
    });
  }
});

  return (
    <Template title="Messages">
      <div>

        <div className="messages__container">
        {groupedMessages.map((group, index) => (
  <div key={index}>
    <div className="message__header">
      <p className="author">{getUsernameFromEmail(group.author)}</p>
      <p className="date">{formatDate(group.messages[0].timestamp)}</p>
    </div>
    <div className="text__container">
      {group.messages.map((message, msgIndex) => (
        <div className="text__message" key={msgIndex}>
          <div className="message">
          <p className="text">{message.text}</p>
          <p className="time">{formatTime(message.timestamp)}</p>
          </div>
          <button className="remove" onClick={() => deleteFromDatabase(message)}>
    <img className="delete_icon" src={deleteIcon} alt={deleteIcon}/>
  </button>
        </div>
      ))}
    </div>
  </div>
))}
        </div>

        <form className="messages__button" onSubmit={handleMessageSubmit}>
          <input
            className="messages__text"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </Template>
  );
};

export default Messages;
