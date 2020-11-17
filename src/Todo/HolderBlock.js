import React from 'react';
import ColorPicker from '../Todo/ColorPicker';
import OnChange from '../Todo/OnChange';

const styles = {
  holder: {
    borderRadius: '4px',
    border: '1px solid #bebfc0',
    backgroundColor: '#feffff'
  }
};

export default function HolderBlock() {
  return (
    <div className="row-block" style={styles.holder}>
      <ColorPicker />
      <OnChange />
  </div>
  )
}