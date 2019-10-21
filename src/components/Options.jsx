import React from 'react';

export default function Options(props) {
  const options = props.symbols.map((option) =>
    <option value={option.name + '-' + option.symbol}></option>
  );
  return (
    <section id="quote">
      <datalist id="companies">
        {options}
      </datalist>
    </section>
  )
}

