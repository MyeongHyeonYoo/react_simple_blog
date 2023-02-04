// react에 있는 내장함수 사용
import React, { useState } from 'react';
/*import logo from './logo.svg';*/
import './App.css';

function App() {
  //ES6 destructuring 문법
  //var [a, b] = [10, 100];
  let [title, b_title] = useState('남자 코트 추천'); 
  let [title2, b_title2] = useState(['남자 코트 추천', ' 강남 우동 맛집']); // useState 여러 개 만들 수 있다.
 

  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3> { posts } </h3>
        <p>2월 4일 발행</p>
      </div>
      <hr />
      <div className='list'>
        <h3> { title } </h3>
        <p>2월 4일 발행</p>
      </div>
      <hr />
      <div className='list'>
        <h3> { title2 } </h3>
        <p>2월 4일 발행</p>
      </div>
      <hr />
      <div className='list'>
        <h3> { title2[0] } </h3>
        <p>2월 4일 발행</p>
      </div>
      <hr />
      <div className='list'>
        <h3> { title2[1] } </h3>
        <p>2월 4일 발행</p>
      </div>
      <hr />
    </div>
  );
}

export default App;
