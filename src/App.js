import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import InputControls from './components/InputControls';
import Cards from './components/Cards';
import { calcularParcelas } from './helpers/helper';

export default function App() {
  const [capital, setCapital] = useState(0);
  const [taxaJuros, setTaxaJuros] = useState(0);
  const [periodo, setPeriodo] = useState(0);
  const [parcelas, setParcelas] = useState([]);

  useEffect(() => {
    if (capital !== 0 && periodo !== 0) {
      const parcelasLocal = calcularParcelas(capital, taxaJuros, periodo);
      setParcelas(parcelasLocal);
    }
  }, [capital, taxaJuros, periodo]);

  const handleChangeCapital = (value) => {
    setCapital(value);
  };
  const handleChangeTaxaJuros = (value) => {
    setTaxaJuros(value);
  };
  const handleChangePeriodo = (value) => {
    setPeriodo(value);
  };

  return (
    <div className="container">
      <Header title={'React - Juros Compostos'} />
      <InputControls
        capital={capital}
        taxaJuros={taxaJuros}
        periodo={periodo}
        onChangeCapital={handleChangeCapital}
        onChangeTaxaJuros={handleChangeTaxaJuros}
        onChangePeriodo={handleChangePeriodo}
      />
      {parcelas.length > 0 && <Cards parcelas={parcelas} />}
    </div>
  );
}
