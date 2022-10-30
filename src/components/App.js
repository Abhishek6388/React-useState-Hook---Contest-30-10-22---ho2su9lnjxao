
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 
 const [click, setClick] = useState(0);
 

 
  return (
    <div>
   {/* the <p> tag with id text will show the concatinated string as output on string 
      the <input> tag with id input will take input entered by user */}
  <input id='text' value={inputValue} onChange={changeInput} />
  
      <p id='intro'>Concated String</p>
      <p> you clicked {click} times </p>
      <button onClick = {() => setClick(click + 1)
        Click me
      </button>
    </div>
  );
}
