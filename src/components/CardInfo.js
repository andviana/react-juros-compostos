import React from 'react';
import CardInfoMontante from './CardInfoMontante';
import CardInfoRendimento from './CardInfoRendimento';
import CardInfoPercentage from './CardInfoPercentage';

export default function CardInfo({ parcela }) {
  const styleClass = parcela.depreciacao ? styles.negativo : styles.positivo;
  const signal = parcela.depreciacao ? '' : '+';
  return (
    <div style={styles.flexColumn}>
      <CardInfoMontante styleClass={styleClass}>
        {parcela.montante}
      </CardInfoMontante>
      <CardInfoRendimento styleClass={styleClass} signal={signal}>
        {parcela.rendimento}
      </CardInfoRendimento>
      <CardInfoPercentage>{parcela.percentage}</CardInfoPercentage>
    </div>
  );
}
const styles = {
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: '10px',
  },
  positivo: {
    fontWeight: 'bold',
    color: 'green',
  },
  negativo: {
    fontWeight: 'bold',
    color: 'red',
  },
};
