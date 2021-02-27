import './ChatMessage.scss';

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;
  const messageType = uid === props.user.uid ? 'sent' : 'received';

  return (
    <div className={`chat-message ${messageType}`}>
      <div className="chat-message__avatar">
        {photoURL ?  <img src={photoURL} alt="" /> : 
          <i className="large inverted teal circular snapchat ghost icon"></i>}
      </div>
      <p>{text}</p>
    </div>
  );
}
export default ChatMessage;
