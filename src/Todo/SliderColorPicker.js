import React from 'react';
import SlidersGroup from '../ComponentGroup/SlidersGroup';

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
  square: {
    backgroundColor: '#e8b541'
  }
};

function SliderColorPicker(props) {
  return (
    <div style={styles.groupColors}>
      <button onClick={props.onChange} className="row-block" style={styles.holder} >
        <div className="square" style={styles.square}></div>
      </button>
      {props.drope ? <SlidersGroup /> : null}
    </div>
  )
}

export default SliderColorPicker;