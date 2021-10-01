import { useState } from 'react';
import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  // Routing control
  
  const [searchText, setSearchText] = useState([]);
  const handleInput = (e) => {
    setSearchText(e.target.value);
}
  return (
    <div>
        <div style={{height: '100vh'}} className="App overflow-y-scroll">
          <Header handleInput={handleInput}></Header>
          <Body searchText={searchText}></Body>
          <Footer></Footer>
      </div>

     
    </div>
  );
}

export default App;
