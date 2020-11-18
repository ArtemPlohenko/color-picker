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
  triangle: {
    width: '0',
    height: '0',
    borderBottom: '20px solid #98999b',
    borderLeft: '18px solid transparent',
    borderRight: '18px solid transparent',
    transform: 'rotate(180deg)'
  }
};

function ListColors() {
  return (
    <button className="row-block" style={styles.holder}>
      <div className="triangle" style={styles.triangle}></div>
    </button>
  )
}

export default ListColors;