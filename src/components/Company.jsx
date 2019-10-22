import React from 'react';
import CompanyDetails from './CompanyDetails';

export default function Company(props) {
  const companies = props.companies.map((company) =>
    <li key={company.symbol}>
      <img src={company.logo} alt={company.symbol} />
      <div className="company-info">
        <div className="company-card-head">
          <h3>{company.name}</h3>
          <input onClick={props.handleRemove} type="submit" name={company.symbol} value="X" />
        </div>
        <h3>Stock Price: {company.price}</h3>
        <h3>Change: {company.change}</h3>
        <a onClick={props.getCompanyData} name={company.symbol} href="#cover-screen" className="button">More info</a>
      </div>
    </li>
  );
  return (
    <section id="company">
      <CompanyDetails
        companyData={props.companyData}
        dividendsData={props.dividendsData}
        newsData={props.newsData}
        logo={props.logo}
      />
      <div id="cover" />
      <ul id="companies">
        {companies}
      </ul>
    </section>
  )
}

