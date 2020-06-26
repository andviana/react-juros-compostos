import React from 'react';
import CardMonth from './CardMonth';
import CardInfo from './CardInfo';

export default function Card({ parcela }) {
  return (
    <div style={styles.flexRow}>
      <CardMonth parcelNumber={parcela.parcelNumber} />
      <CardInfo parcela={parcela} />
    </div>
  );
}
const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flexStart',
    padding: '10px',
    margin: '10px',
    border: '1px solid lightgray',
    width: '160px',
    borderRadius: '10px',
  },
};
