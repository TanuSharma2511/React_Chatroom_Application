import React,{useRef,useEffect} from 'react';

import Message from './Message/Message';
import "../Chat/Chat.css";

const Messages = ({ messages, name }) => {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);
   return(
  <div>
    {messages.map((message, i) => <div  className="message" key={i}><Message message={message} name={name}/></div>)}
    <div ref={messagesEndRef}>

    </div>
    </div>
   );
};

export default Messages;