import { useState } from 'react';
import ChatMessage from '../ChatMessage/ChatMessage';
import './ChatRoom.scss';

const ChatRoom = ({ messages, user, sendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (newMessage) {
      sendMessage(newMessage);
      setNewMessage('');
    }
  }

  return (
    <div>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} user={user} />)}
      </main>
      <form onSubmit={onSubmit}>
        <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} />
        {/* <button type="submit">
          <span className="emoji">🚀</span>
        </button> */}
        <div className="submit-btn">
          <button className="ui icon button">
            <i className="big rocketchat icon"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
export default ChatRoom;
