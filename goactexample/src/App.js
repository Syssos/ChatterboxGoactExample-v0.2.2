import './App.css';

import BodyContent from './bodycontent';
import ChatFooter from './chatfooter';

function App() {
  return (
    <div className="App">
      <div className="Header">
        SomeFormName
      </div>
      <div className="bodycontainer">
        <BodyContent/>
      </div>
      <div className="ChatFooter">
        <ChatFooter/>
      </div>
    </div>
  );
}

export default App;
