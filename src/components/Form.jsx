import React from 'react';
import Options from './Options';

function Form(props) {

  return (
    <form onSubmit={props.handleSubmit}>
      <input type="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/111px-Vector_search_icon.svg.png" onClick={props.handleSubmit} alt="Search" />
      <input type="text" list="companies" autocomplete="off" name="symbol" value={props.symbol} onChange={props.handleChange} placeholder="Enter a company name" />
      <Options symbols={props.symbols}/>
    </form>
  )
}
export default Form;
