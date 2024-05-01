import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://miro.medium.com/v2/resize:fit:709/0*Eqqrv9zVpH99X726.png">
        Olha só que fofo esse Rust!
      </Post>
    </div>
  );
}

export default App;
