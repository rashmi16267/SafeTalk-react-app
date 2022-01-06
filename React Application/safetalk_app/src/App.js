//import logo from './logo.svg';
import './App.css';
import { ChatEngine } from 'react-chat-engine';

const App = () => {
  return(
    <ChatEngine
      height="100vh"
      projectID="6781dd0d-db12-4603-877b-86b9b1981ba8"
      userName="admin1"
      userSecret="password1"

    />
  );
}

export default App;