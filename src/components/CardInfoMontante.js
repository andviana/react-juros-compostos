import React from 'react';
import { toMoney } from '../helpers/helper';

export default function CardInfoMontante({ children, styleClass }) {
  return (
    <div>
      <span style={styleClass}>{toMoney(children)}</span>
    </div>
  );
}
