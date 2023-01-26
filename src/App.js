import React from 'react'
import Categories from './component/Categories';
import Header from './component/Header';
import PizzBlock from './component/PizzBlock';
import Sort from './component/Sort';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzBlock title='Mexico' price={600} />
              <PizzBlock title='Paperone' price={800} />
              <PizzBlock title='Chess' price={750} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
