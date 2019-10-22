import React from 'react';

export default function Dividend(props) {
  let dividendsList = '';
  if (props.dividendsData) {
    dividendsList = props.dividendsData.map((dividend) =>
      <>
        <p><b>Ex Date: </b>{dividend.exDate}</p>
        <p><b>Payment Date: </b>{dividend.paymentDate}</p>
        <p><b>Amount: </b>{dividend.amount}</p>
        <p><b>Frequency: </b>{dividend.frequency}</p>
        <p><b>Description: </b>{dividend.description}</p>
      </>
    );
  }
  return (
    <section id="dividends">
      <h2>Dividend Info:</h2>
      {dividendsList}
    </section>
  )
}

