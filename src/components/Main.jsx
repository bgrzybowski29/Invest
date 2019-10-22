import React from 'react';
import Company from './Company';

class Main extends React.Component {
  
  componentDidUpdate = () => {
    if (this.props.companies.length > 0) {
      const hh = document.querySelector("#hh");
      const main = document.querySelector("#main");
      if (hh !== null) document.querySelector("#hh").style.display = "none";
      if (main !== null) {
        document.querySelector("#main").style.backgroundSize = "100% 100%";
        document.querySelector("#main").style.justifyContent = "flex-start";
      }
    }
  }
  render() {
    return (
      <main id="main">
        <div id="hh">
          Welcome to <b>Invest</b> your destination for investment research. Get real-time quotes , financials, news and compay information.
      </div>
        <Company
          companies={this.props.companies}
          handleRemove={this.props.handleRemove}
          quoteData={this.props.quoteData}
          dividendsData={this.props.dividendsData}
          newsData={this.props.newsData}
          companyData={this.props.companyData}
          getCompanyData={this.props.getCompanyData}
          logo={this.props.logo}
        />
      </main >
    )
  }
}
export default Main;