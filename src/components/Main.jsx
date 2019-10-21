import React from 'react';
import Company from './Company';
import Dividend from './Dividend';
import Logo from './Logo';
import News from './News';
import Quote from './Quote';

export default function Main(props) {

  return (
    <main id="main">
      <Company
        companies={props.companies}
        handleRemove={props.handleRemove}
        quoteData={props.quoteData}
        dividendsData={props.dividendsData}
        newsData={props.newsData}
        companyData={props.companyData}
        getCompanyData={props.getCompanyData}
      />
      {/* <Logo logo={props.logo} />
      <Quote quoteData={props.quoteData} />
      <Dividend dividendsData={props.dividendsData} />
      <Company companyData={props.companyData} />
      <News newsData={props.newsData} /> */}
    </main>
  )
}

