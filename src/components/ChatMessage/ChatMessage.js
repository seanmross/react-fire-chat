import './ChatMessage.scss';
import { StyleSheet, css } from 'aphrodite';
import { fadeInLeft, fadeInRight, fadeInUp } from 'react-animations';

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;
  const messageType = uid === props.user.uid ? 'sent' : 'received';

  const animations = StyleSheet.create({
    fadeInLeft: {
      animationName: fadeInLeft,
      animationDuration: '1s'
    },
    fadeInRight: {
      animationName: fadeInRight,
      animationDuration: '1s'
    },
    fadeInUp: {
      animationName: fadeInUp,
      animationDuration: '0.5s'
    }
  });

  return (
    <div className={`chat-message ${messageType} ${css(animations.fadeInUp)}`}>
      <div className="chat-message__avatar">
        {photoURL ?  <img src={photoURL} /> : 
          <i className="large inverted teal circular snapchat ghost icon"></i>}
      </div>
      <p>{text}</p>
    </div>
  );
}
export default ChatMessage;
