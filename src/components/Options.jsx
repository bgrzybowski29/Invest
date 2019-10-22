import React from 'react';

export default function Options(props) {
  let options = '';
  if (props.symbols) {
    options = props.symbols.map((option) =>
      <option key={option.symbol} value={option.name + '-' + option.symbol}></option>
    );
  }
  return (
    <section id="quote">
      <datalist id="companies">
        {options}
      </datalist>
    </section>
  )
}

