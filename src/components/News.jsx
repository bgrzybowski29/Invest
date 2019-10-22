import React from 'react';

export default function News(props) {
  let newsList = '';
  if (props.newsData) {
    newsList = props.newsData.map((news) =>
      <>
        <a href={news.url}>{news.headline}</a>
        <p><b>Source: </b>{news.source}</p>
      </>
    );
  }
  return (
    <section id="news">
      <h2>News:</h2>
      {newsList}
    </section>
  )
}

