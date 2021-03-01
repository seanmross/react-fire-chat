import { useEffect, useRef, useState } from 'react';
import ChatMessage from '../ChatMessage/ChatMessage';
import './ChatRoom.scss';

const ChatRoom = ({ messages, user, sendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const dummy = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (newMessage) {
      sendMessage(newMessage);
      setNewMessage('');
    }
  }

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} user={user} />)}
        <div ref={dummy}></div>
      </main>
      <form onSubmit={onSubmit}>
        <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} autoFocus />
        <div className="submit-btn-container">
          <button className="ui icon button" disabled={!newMessage}>
            <i className="big rocketchat icon"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
export default ChatRoom;
