import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import '../Chat/Chat.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
              <h2>
                {users.map(({name}) => (
                  <li>
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                    </li>
                ))}
              </h2>
            </div>
        )
        : null
    }
  </div>
  
);

export default TextContainer;