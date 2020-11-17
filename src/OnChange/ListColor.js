import React from 'react';

const styles = {
  holder: {
    width: '84px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
    border: '0',
    borderLeft: '1px solid #bebfc0',
    backgroundColor: '#feffff'
  },
  square: {
    backgroundColor: '#e8b541'
  }
};

export default function ListColor() {
  return (
    <button className="row-block" style={styles.holder}>
      <div className="square" style={styles.square}></div>
    </button>
  )
}