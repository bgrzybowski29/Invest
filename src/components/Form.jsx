import React from 'react';
import Options from './Options';

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/111px-Vector_search_icon.svg.png" onClick={props.handleSubmit} alt="Search" />
      <input type="text" id="form-input" onClick={props.handleSubmit} list="companies" autoComplete="off" name="symbol" value={props.coName} symbol={props.symbol} onChange={props.handleChange} placeholder="Enter a company name" />
      <Options handleSubmit={props.handleSubmit} symbols={props.symbols} />
    </form>
  )
}
export default Form;
