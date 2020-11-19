import React from 'react';

const styles = {
  mainBox: {
    borderRadius: '4px',
    boxShadow: '0 20px 40px #918d8c',
    backgroundColor: '#feffff',
    textAlign: 'end'
  }
};

const colors = {
  red: '#df222e',
  yellow: '#e8b541',
  lightGreen: '#18a35a',
  lightBlue: '#1dafe9'
};

function ListColors(props) {
  return (
    <div className="mainBox choose-block" style={styles.mainBox}>
      <ul>
        <li onClick={() => {props.setColor(colors.red)}} className="line" style={styles.line}>
          red
          <div className="square" style={{backgroundColor: colors.red}}></div>
        </li>
        <li onClick={() => {props.setColor(colors.yellow)}} className="line activeHover" style={styles.line}>
          yellow
          <div className="square" style={{backgroundColor: colors.yellow}}></div>
        </li>
        <li onClick={() => {props.setColor(colors.lightGreen)}} className="line" style={styles.line}>
          green
          <div className="square" style={{backgroundColor: colors.lightGreen}}></div>
        </li>
        <li onClick={() => {props.setColor(colors.lightBlue)}} className="line" style={styles.line}>
          blue
          <div className="square" style={{backgroundColor: colors.lightBlue}}></div>
        </li>
      </ul>
    </div>
  )
}

export default ListColors;