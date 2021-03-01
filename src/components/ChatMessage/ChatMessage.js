import './ChatMessage.scss';
import Tooltip from '@material-ui/core/Tooltip';

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;
  const messageType = uid === props.user.uid ? 'sent' : 'received';

  return (
    <div className={`chat-message ${messageType}`}>
      <div className="chat-message__avatar">
        <Tooltip title={<div style={{fontSize: '12px'}}>{props.user.displayName}</div>}>
          {photoURL ?  <img src={photoURL} alt="" /> : 
            <i className="large inverted teal circular snapchat ghost icon"></i>}
        </Tooltip>
      </div>
      <p>{text}</p>
    </div>
  );
}
export default ChatMessage;
