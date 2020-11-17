import React from 'react';

const styles = {
  text: {
    padding: '20px',
    color: '#9fa0a1',
    fontSize: '24px',
    fontWeight: 'bold'
  }
};

export default function ColorPicker() {
  return (
      <div className="col" style={styles.text}>#FFCC33</div>
  )
}