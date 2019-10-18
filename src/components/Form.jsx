import React from 'react';

function Form(props) {

  return (
    <form onSubmit={props.handleSubmit}>
      <input type="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/111px-Vector_search_icon.svg.png" onClick={props.handleSubmit} alt="Search" />
      <input type="text" name="ticker" value={props.ticker} onChange={props.handleChange} placeholder="Enter a stock ticker" />
    </form>
  )
}
export default Form;
