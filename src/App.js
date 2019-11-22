import React from 'react';
import Reader from './components/Reader/Reader';
import Publication from './components/publications.json';
import style from './App.module.css';

const App = () => (
  <div className={style}>
    <Reader items={Publication} />
  </div>
);

export default App;
