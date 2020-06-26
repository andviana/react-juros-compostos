import React from 'react';
import { toMoney } from '../helpers/helper';

export default function CardInfoRendimento({ styleClass, children, signal }) {
  return (
    <div>
      <span style={styleClass}>
        {signal}
        {toMoney(children)}
      </span>
    </div>
  );
}
