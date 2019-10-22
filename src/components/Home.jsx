import React from 'react';
import Form from './Form';
import Main from './Main';

export default function Home(props) {

  return (
    <>
      <hr />
      <Form
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
        symbol={props.symbol}
        symbols={props.symbols}
      />
      <hr />
      <Main
        quoteData={props.quoteData}
        dividendsData={props.dividendsData}
        companyData={props.companyData}
        newsData={props.newsData}
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
        companies={props.companies}
        handleRemove={props.handleRemove}
        getCompanyData={props.getCompanyData}
        symbol={props.symbol}
        logo={props.logo}
      />
    </>
  )
}

