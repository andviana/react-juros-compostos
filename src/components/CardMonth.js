import React from 'react';

export default function CardMonth({ parcelNumber }) {
  return (
    <div>
      <span style={styles.text}>{parcelNumber}</span>
    </div>
  );
}
const styles = {
  text: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
};
