import React from 'react';
import ListColors from '../ComponentGroup/ListColors';

const styles = {
  groupColors: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
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

function ListColorPicker(props) {
  return (
    <div style={styles.groupColors}>
      <button onClick={props.onChange} className="row-block" style={styles.holder}>
        <div className="triangle" style={styles.triangle}></div>
      </button>
      {props.drope ? <ListColors {...props} /> : null}
    </div>
  )
}

export default ListColorPicker;