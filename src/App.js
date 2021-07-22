import React from 'react';

import './App.scss';

import Header from './components/header';
import SearchField from "./components/search";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <SearchField />
      </div>
    </div>
  );
}

export default App;
