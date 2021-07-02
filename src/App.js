import { Route, Link } from 'react-router-dom';
import './App.css';

import Top from './components/Top';
import SearchForm from './components/SearchForm';
import Categories from './components/Categories';
import Category from './components/Category';
import categoryArr from './CategoryArr';


function App() {
  return (
    <div className="App">
      <header>
          <nav>
            <h1>
              <Link to='/'>Top Anime</Link>
            </h1>
            <p>
              <Link to='/categories'>Categories</Link>
            </p>
            <p>
              <Link to='/search'>Search</Link>
            </p>
          </nav>
      </header>
      <main>
        <Route path='/' exact render={() => <Top />} />
        <Route path='/search' render={() => <SearchForm />} />
        <Route path='/categories' exact render={() => <Categories />} />
        {categoryArr.map((category, i) => {
            return (
              <Route key={i} path={'/categories/'+ category.name} exact render={() => {
                  return <Category  category={category}/>
                }} />
              )
          })}
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
