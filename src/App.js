import { ChatEngine } from 'react-chat-engine';

import LoginForm from  './components/LoginForm';
import ChatFeed from './components/ChatFeed'; 

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine
            height="100vh"
            projectID="52ea2caf-a7e4-491e-98e9-bc56a511879b"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;