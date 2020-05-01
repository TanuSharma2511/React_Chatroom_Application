import React, { useState, useEffect} from "react";

import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://chat-application--react.herokuapp.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
      // chatMessages.scrollTop = chatMessages.scrollHeight;
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <React.Fragment>
      <body className="body1">
    <div className="wrapper">
 
 <div className="sidebar">
     <div className="chat-sidebar">
         <h3> Room Name:</h3>
         <h2 id="room-name">{room}</h2>
         <h3> User Name:</h3>
         <h2 id="user-name">{name}</h2>
         <h3><i className="fas fa-users"></i>Participants</h3>
         <ul id="users">
         <TextContainer id={name} users={users}/>
         </ul>
       </div>

     <div className="social_media">
       <a href="www.facebook.com"><i className="fa fa-facebook-f"></i></a>
       <a href="www.twitter.com"><i className="fa fa-twitter"></i></a>
       <a href="www.instagram.com"><i className="fa fa-instagram"></i></a>
   </div>
 </div>
 <div className="main_content">
     <div className="header">Welcome to Chatbot!
         <div className="leave">
         <a href="/" className="btn">Leave Room</a>
         </div>
     </div>  
     
      <div className="chat-messages" >
     <Messages messages={messages} name={name} id={name} />
    
     </div>
    

 
 <Input message={message} setMessage={setMessage} sendMessage={sendMessage} id={message} />
    
   </div>
</div>
</body>
</React.Fragment>
  );
}

export default Chat;
