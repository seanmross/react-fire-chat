import { StyleSheet, css } from 'aphrodite';
import { zoomIn } from 'react-animations';
import './TopBar.scss';

const TopBar = ({ user, onSignOut }) => {
  // const animations = StyleSheet.create({
  //   zoomIn: {
  //     animationName: zoomIn,
  //     animationDuration: '1s'
  //   }
  // });

  return (
    <header className="top-bar">
      <h1>⚛️ 🔥 💬 </h1>
      {user && (
        <div className="top-bar__right">
          <img src={user.photoURL} alt=""/>
          <button className="ui button" onClick={onSignOut}>
            Sign out
          </button>
        </div>
      )}
    </header>
  )
}
export default TopBar;
