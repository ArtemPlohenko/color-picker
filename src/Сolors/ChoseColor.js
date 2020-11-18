import React from 'react';

const styles = {
  mainBox: {
    borderRadius: '4px',
    boxShadow: '0 20px 40px #918d8c',
    backgroundColor: '#feffff',
    textAlign: 'end'
  }
}

function ChoseColor() {
  return (
    <div className="mainBox choose-block" style={styles.mainBox}>
      <ul>
        <li className="line" style={styles.line}>
          red
          <div className="square bg-red"></div>
        </li>
        <li className="line active" style={styles.line}>
          yellow
          <div className="square bg-yellow"></div>
        </li>
        <li className="line" style={styles.line}>
          green
          <div className="square bg-light-green"></div>
        </li>
        <li className="line" style={styles.line}>
          blue
          <div className="square bg-light-blue"></div>
        </li>
      </ul>
    </div>
  )
}

export default ChoseColor;