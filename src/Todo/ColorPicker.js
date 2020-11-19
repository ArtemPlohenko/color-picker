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
  const [activeColor, setActiveColor] = useState(false),
        [activeColorRGB, setActiveColorRGB] = useState(false),
        [curentColor, setCurentColor] = useState(false);

  const openColorList = () => {
    setActiveColor(!activeColor);
    setActiveColorRGB(false);
  }

  const openColorRGB = () => {
    setActiveColorRGB(!activeColorRGB);
    setActiveColor(false);
  }

  const setColor = (color) => {
    setCurentColor(color);
    setActiveColor(false);
    setActiveColorRGB(false);
  }

  return (
    <>
      <div style={styles.lineHolder}>
        <div className="col"  style={styles.text}>#FFCC33</div>
        <div className="row-block" style={styles.holder}>
          <SliderColorPicker
            curentColor={curentColor}
            drope={activeColorRGB}
            onChange={openColorRGB} />
          <ListColorPicker
            setColor={setColor}
            curentColor={curentColor}
            drope={activeColor}
            onChange={openColorList} />
        </div>
      </div>
    </>
  )
}

export default ColorPicker;