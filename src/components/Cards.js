import React from 'react';
import Card from './Card';

export default function Cards({ parcelas }) {
  return (
    <div style={styles.flexRow}>
      {parcelas.map((parcela, index) => {
        return <Card key={index} parcela={parcela} />;
      })}
    </div>
  );
}
const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '20px',
  },
};
