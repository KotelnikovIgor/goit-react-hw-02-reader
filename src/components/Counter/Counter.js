import React from 'react';
import s from './Counter.module.css';

const Counter = ({ index }) => <p className={s.counter}>{index}/12</p>;

export default Counter;
