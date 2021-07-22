import React from 'react';

import './App.scss';

import Header from './components/header';
import SearchField from './components/search';
import Filter from './components/filter';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <SearchField />
        <Filter />
      </div>
    </div>
  );
}

export default App;
