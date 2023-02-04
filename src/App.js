/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = {color : 'blue', fontSize : '30px' };
  

  return (
    <div className="App">
      <div className="black-nav">
        {/* <div style={{color : 'blue', fontSize : '30px' }}>개발 Blog</div> */}
        <div style={ posts }>개발 Blog</div>
        
      </div>
      <img src={ logo } />
      <h4>하하..</h4>
    </div>
  );
}

export default App;
