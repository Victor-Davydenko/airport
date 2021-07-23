import React from 'react';

import './App.scss';

import Header from './components/header';
import SearchField from './components/search';
import Filter from './components/filter';
import Table from "./components/table";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <SearchField />
        <Filter />
        <Table />
      </div>
      <Footer />
    </div>
  );
}

export default App;
