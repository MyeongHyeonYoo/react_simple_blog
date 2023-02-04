/* eslint-disable */ // warning 문구 없애기
// react에 있는 내장함수 사용
import React, { useState } from 'react';
import './App.css';

function App() {
  //ES6 destructuring 문법
  //var [a, b] = [10, 100];

  let [title, b_title] = useState(['남자 코트 추천', ' 강남 우동 맛집', '파이썬 독학']);
  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3> { title[0] } <span className='best' onClick={ () => {console.log(1) }}>👍</span> 0 </h3>
        <p>2월 4일 발행</p>
      </div>
      <hr />
      <div className='list'>
        <h3> { title[1] } </h3>
        <p>2월 4일 발행</p>
      </div>
      <hr />
      <div className='list'>
        <h3> { title[2] } </h3>
        <p>2월 4일 발행</p>
      </div>
      <hr />
    </div>
  );
}

export default App;
