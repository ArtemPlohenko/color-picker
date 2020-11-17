import React from 'react';
import ListColor from '../OnChange/ListColor';
import ListColors from '../Сolors/ListColors';

const styles = {
  groupColors: {
    display: 'flex'
  }
};

export default function OnChange() {
  return (
    <div style={styles.groupColors}>
      <ListColor></ListColor>
      <ListColors></ListColors>
    </div>
  )
}
