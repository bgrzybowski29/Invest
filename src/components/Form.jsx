import React from 'react';
import Options from './Options';
import search from './search.png';

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="image" src={search} onClick={props.handleSubmit} alt="Search" />
      <input type="text" id="form-input" onClick={props.handleSubmit} list="companies" autoComplete="off" name="symbol" value={props.coName} symbol={props.symbol} onChange={props.handleChange} placeholder="Enter a company name" />
      <Options handleSubmit={props.handleSubmit} symbols={props.symbols} />
    </form>
  )
}
export default Form;
