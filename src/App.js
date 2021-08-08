import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'; 

import './App.css';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="52ea2caf-a7e4-491e-98e9-bc56a511879b"
            userName="traitor"
            userSecret="user1"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;