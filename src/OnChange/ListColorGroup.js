import React from 'react';

const styles = {
  mainBox: {
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0 20px 40px #918d8c',
    backgroundColor: '#feffff',
    textAlign: 'end'
  },
  ul: {
    width: '95%',
    marginLeft: 'auto'
  },
  lineColor: {
    width: '90%',
    height: '2px',
    backgroundColor: '#e2e0e0',
    background: 'linear-gradient(to right, #bebfc0 0%, #333 100%)',
    marginLeft: 'auto',
    marginRight: '0'
  },
  btn: {
    fontSize: '20px',
    fontWeight: 'normal',
    textTransform: 'uppercase'
  }
}

export default function ListColorGroup() {
  return (
    <div className="mainBox first-box" style={styles.mainBox}>
      <ul style={styles.ul}>
        <li className="line">
          R
          <div className="lineColor" style={styles.lineColor}></div>
        </li>
        <li className="line">
          G
          <div className="lineColor" style={styles.lineColor}></div>
        </li>
        <li className="line">
          B
          <div className="lineColor" style={styles.lineColor}></div>
        </li>
      </ul>
      <div className="buttonsGroup">
        <button className="btn btn-cancel" style={styles.btn}>cancel</button>
        <button className="btn btn-ok" style={styles.btn}>ok</button>
      </div>
    </div>
  )
}