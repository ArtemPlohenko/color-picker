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

export default function ColorPicker() {

  const [activeColor, setactiveColor] = useState(false);

  const openColorList = () => {
    setactiveColor(!activeColor);
  }

  return (
    <>
      <div style={styles.lineHolder}>
        <div className="col" style={styles.text}>#FFCC33</div>
        <div className="row-block" style={styles.holder}>
          <ListColorPicker drope={activeColor} onChange={openColorList} />
          <SliderColorPicker drope={activeColor} onChange={openColorList} />
        </div>
      </div>
    </>
  )
}