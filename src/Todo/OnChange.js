import React from 'react';
import ListColor from '../OnChange/ListColor';
import ListColors from '../Сolors/ListColors';

const styles = {
  groupColors: {
    display: 'flex'
  }
};

function OnChange() {
  return (
    <div style={styles.groupColors}>
      <ListColor></ListColor>
      <ListColors></ListColors>
    </div>
  )
}

export default OnChange;