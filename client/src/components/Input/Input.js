import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
    <div className="chat-form-container">
<form>
  <input
    type="text"
    placeholder="Enter Message ..."
    value={message}
    onChange={({ target: { value } }) => setMessage(value)}
    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    required
  />
  <button className="btn btn-plane" onClick={e => sendMessage(e)}><i className="fas fa-paper-plane"></i> Send</button>
</form>
</div>
  
)

export default Input;