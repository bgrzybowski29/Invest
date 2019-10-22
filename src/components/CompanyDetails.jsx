import React from 'react';
import Dividend from './Dividend';
import News from './News';

export default function CompanyDetails(props) {
  return (
    <div id="cover-screen">
      <a href="# " className="cancel">×</a>
      <div id="co-data">
        <h1>{props.companyData.companyName}</h1>
        <div id="co-description">{props.companyData.description}
        </div>
        <img
          src={props.logo}
          alt="coimage" />
      </div>
      <div id="co-details">
        <Dividend dividendsData={props.dividendsData} />
        <News newsData={props.newsData} />
        <div id="co-contact">
          <h2>Additional Details:</h2>
          <p><b>CEO: </b>{props.companyData.CEO}</p>
          <p><b>Industry: </b>{props.companyData.industry}</p>
          <p><b>Sector: </b>{props.companyData.sector}</p>
          <p><b>Employees: </b>{props.companyData.employees}</p>
          <p><b>Employees: </b>{props.companyData.website}</p>
          <h3>Address:</h3>
          <p>{props.companyData.address}</p>
          <p>{props.companyData.city}, {props.companyData.state} {props.companyData.zip} {props.companyData.country}</p>
          <p>{props.companyData.phone}</p>
        </div>
      </div>
    </div>

  )
}

