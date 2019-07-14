import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Introduction from './components/Introduction/Introduction'
import Registry from './components/Registry/Registry'
import Checklist from './components/Checklist/Checklist'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div className="intro">
        <Introduction></Introduction>
      </div>
      <div className="registry">
        <Registry></Registry>
      </div>
      <div className="checklist">
        <Checklist></Checklist>
      </div>
      <div className="credits">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
