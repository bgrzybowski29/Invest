import React from 'react';

export default function News(props) {

  return (
    <section id="news">
      <h3>News:</h3><p>{props.newsData}</p>
    </section>
  )
}

