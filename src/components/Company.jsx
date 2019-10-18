import React from 'react';

export default function Company(props) {
  const companies = props.companies.map((company) =>
    <li key={company.ticker}>
      <img src={company.logo} alt={company.ticker} />
      <div className="company-info">
        <div className="company-card-head">
          <h3>{company.name}</h3>
          <input onClick={props.handleRemove} type="submit" name={company.ticker} value="X" />
        </div>
        <h3>Stock Price: {company.price}</h3>
        <h3>Change: {company.change}</h3>
        <a onClick={props.getCompanyData} name={company.ticker} href="#cover-screen" className="button">More info</a>
      </div>
    </li>
  );
  return (
    <section id="company">
      <div id="cover-screen">
        <a href="#" className="cancel">×</a>
        <h3>{props.companyData}</h3>
        <h3>{props.dividendsData}</h3>
        <h3>{props.newsData}</h3>
      </div>
      <div id="cover" />
      <ul id="companies">
        {companies}
      </ul>
    </section>
  )
}

