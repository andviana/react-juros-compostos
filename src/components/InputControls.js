import React from 'react';

export default function InputControls({
  capital,
  taxaJuros,
  periodo,
  onChangeCapital,
  onChangeTaxaJuros,
  onChangePeriodo,
}) {
  const handleChangeCapital = (event) => {
    onChangeCapital(event.target.value);
  };
  const handleChangeTaxaJuros = (event) => {
    onChangeTaxaJuros(event.target.value);
  };
  const handleChangePeriodo = (event) => {
    onChangePeriodo(event.target.value);
  };

  return (
    <div style={styles.flexRow}>
      <div className="input-field" style={styles.inputControl}>
        <input
          id="inputCapital"
          type="number"
          step="100"
          min="0"
          value={capital}
          onChange={handleChangeCapital}
        />
        <label htmlFor="inputCapital" className="active">
          Montante Inicial:
        </label>
      </div>
      <div className="input-field" style={styles.inputControl}>
        <input
          id="inputTaxaJuros"
          type="number"
          step="0.1"
          min="-12"
          max="12"
          value={taxaJuros}
          onChange={handleChangeTaxaJuros}
        />
        <label htmlFor="inputTaxaJuros" className="active">
          Taxa de Juros Mensal:
        </label>
      </div>
      <div className="input-field" style={styles.inputControl}>
        <input
          id="inputPeriodo"
          type="number"
          step="1"
          min="0"
          value={periodo}
          onChange={handleChangePeriodo}
        />
        <label htmlFor="inputPeriodo" className="active">
          Período (meses):
        </label>
      </div>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '40px',
  },
  inputControl: {
    margin: '10px',
    minWidth: '250px',
    maxWidth: '250px',
  },
};
