import React from 'react';

// import './Message.css';
import "../../Chat/Chat.css";

const Message = ({ message: { text, user,time }, name }) => (

    <React.Fragment>
  <p className="meta">{user}<span> {time}</span></p>
  <p className="text">
    {text}
  </p>
    </React.Fragment>
  
)

export default Message;