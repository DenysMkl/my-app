import React, {useState} from 'react';
import Counter from './components/Counter';
import ChangeCaption from './components/ChangeCaption';


function App() {

  return (
    <div className="App">
      <Counter/>
      <ChangeCaption/>
    </div>
  );
}

export default App;