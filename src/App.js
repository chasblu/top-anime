import { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Top from './components/Top';
import SearchForm from './components/SearchForm';
import Categories from './components/Categories';


function App() {
  return (
    <div className="App">
      <header>
          <nav>
            <h1>
              <Link to='/'>Top Anime</Link>
            </h1>
            <h1>
              <Link to='/categories'>Categories</Link>
            </h1>

          </nav>
      </header>
      <main>
        <SearchForm />
        <Route path='/' exact render={() => <Top />} />
        <Route path='/categories' exact render={() => <Categories />} />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
