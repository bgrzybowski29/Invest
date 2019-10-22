import React from 'react';
import Company from './Company';

export default function Main(props) {
  const divStyle = {
    backgroundSize: '100% 100%',
    justifyContent: 'flex-start',
  };
  if (props.companies.length > 0) {
    return (
      <main id="main" style={divStyle}>
        <Company
          companies={props.companies}
          handleRemove={props.handleRemove}
          quoteData={props.quoteData}
          dividendsData={props.dividendsData}
          newsData={props.newsData}
          companyData={props.companyData}
          getCompanyData={props.getCompanyData}
          logo={props.logo}
        />
      </main >
    )
  }
  else {
    return (
      <main id="main">
        <div id="hh">
          Welcome to <b>Invest</b> your destination for investment research. Get real-time quotes , financials, news and compay information.
        </div>
        <Company
          companies={props.companies}
          handleRemove={props.handleRemove}
          quoteData={props.quoteData}
          dividendsData={props.dividendsData}
          newsData={props.newsData}
          companyData={props.companyData}
          getCompanyData={props.getCompanyData}
          logo={props.logo}
        />
      </main >
    )
  }
}