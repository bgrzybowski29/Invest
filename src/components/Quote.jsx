import React from 'react';

export default function Quote(props) {

  return (
    <section id="quote">
      <h3>Quote:</h3><p>{props.quoteData}</p>
    </section>
  )
}

