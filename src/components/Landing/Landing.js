import { StyleSheet, css } from 'aphrodite';
import { fadeInDown, fadeInUp } from 'react-animations';
import './Landing.scss';

const Landing = ({ onSignIn }) => {
  const styles = StyleSheet.create({
    fadeInDown: {
      animationName: fadeInDown,
      animationDuration: '1s'
    },
    fadeInUp: {
      animationName: fadeInUp,
      animationDuration: '1s'
    }
  });

  return (
    <div className="ui container landing">
      <h2 className={`ui header ${css(styles.fadeInDown)}`}>&#60;react-fire-chat&#62;</h2>
      <button className={`ui blue button ${css(styles.fadeInUp)}`} onClick={onSignIn}>
        <i className="google icon"></i>
        Sign in with Google
      </button>
    </div>
  );
}
export default Landing;
