import React from 'react';
import ListColorGroup from './OnChange/ListColorGroup';
import ChoseColor from '../src/Сolors/ChoseColor';
import HolderBlock from '../src/Todo/HolderBlock';

function App() {
  return (
    <div className="wrapper">
      <div className="title">
        <h1>ColorPicker</h1>
      </div>
      <HolderBlock></HolderBlock>
      <ListColorGroup />
      <ChoseColor />
    </div>

  );
}

export default App;