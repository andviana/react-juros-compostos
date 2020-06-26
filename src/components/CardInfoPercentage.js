import React from 'react';
import { toPercent } from '../helpers/helper';

export default function CardInfoPercentage({ children }) {
  const styleClass = children < 0 ? styles.negativo : styles.positivo;
  return (
    <div>
      <span style={styleClass}>{toPercent(children)}</span>
    </div>
  );
}
const styles = {
  positivo: {
    fontWeight: 'bold',
    color: 'gray',
  },
  negativo: {
    fontWeight: 'bold',
    color: 'orange',
  },
};
