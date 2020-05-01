import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <React.Fragment>
    <h1 className="text-center">Chatbot Application</h1>
    <div className="details">
    <p>To start the Chatbot application , First fill all the required details.</p>
    <button type="button" className="btn btn1 btn-default btn-lg text-center" data-toggle="modal" data-target="#myModal">
        Fill Required Details
      </button>
    </div>  

    <div id="myModal" className="modal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 className="modal-title">Required Details For Chatbot</h4>
                </div>
                <div className="modal-body">
                    <p>Enter Room name</p>
                    <form action="chat.html">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Room-Name" name="room" id="room" onChange={(event) => setRoom(event.target.value)} required />
                        </div>
                        <div className="form-group">
                            <p>Enter User name</p>
                            <input type="text" className="form-control" placeholder="User-Name" name="name" onChange={(event) => setName(event.target.value)} id="username" required />
                        </div>
                        {/* <button type="submit" class="btn btn-primary" >Submit</button> */}
                         <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <button className="btn btn-primary" type="submit">submit</button>
                       </Link>
                    </form>
                </div>
            </div>
        </div>
    </div> 

        </React.Fragment>
  );
} 
