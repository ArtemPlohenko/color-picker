import React, { useState } from 'react';

import ListColorPicker from './ListColorPicker';
import SliderColorPicker from './SliderColorPicker';

const styles = {
  lineHolder: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid #bebfc0',
    backgroundColor: '#feffff'
  },
  text: {
    padding: '20px',
    color: '#9fa0a1',
    fontSize: '24px',
    fontWeight: 'bold'
  }
};

function ColorPicker() {

  const [activeColor, setactiveColor] = useState(false);

  const openColorList = () => {
    setactiveColor(!activeColor);
  }

  const [activeColor2, setactiveColor2] = useState(false);

  const openColorList2 = () => {
    setactiveColor2(!activeColor2);
  }

  return (
    <>
      <div style={styles.lineHolder}>
        <div className="col" style={styles.text}>#FFCC33</div>
        <div className="row-block" style={styles.holder}>
          <SliderColorPicker drope={activeColor2} onChange={openColorList2} />
          <ListColorPicker drope={activeColor} onChange={openColorList} />
        </div>
      </div>
    </>
  )
}

export default ColorPicker;