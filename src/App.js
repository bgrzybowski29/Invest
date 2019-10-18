import React from 'react';
import './App.css';
import { getStockQuote, getLogo, getDividends, getCompanyData, getNews, getFinancials } from './services/api-helper';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Company from './components/Company';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      ticker: "",
      quoteData: "",
      dividendsData: "",
      logo: "",
      companyData: "",
      newsData: "",
    }
  }
  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleRemove = (event) => {
    const result = this.state.companies.filter(co => co.ticker != event.target.name);
    this.setState({ companies: result });
  }
  getCompanyData = async (event) => {
    const coTicker = event.target.name;
    const dividends = await getDividends(coTicker);
    const company = await getCompanyData(coTicker);
    const news = await getNews(coTicker);

    // let quoteData = JSON.stringify(quote);
    let companyData = JSON.stringify(company);
    let dividendsData = JSON.stringify(dividends);
    let newsData = JSON.stringify(news);

    this.setState({ dividendsData, companyData, newsData });
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const quote = await getStockQuote(this.state.ticker);
    const logo = await getLogo(this.state.ticker);
    const company = {
      name: quote.companyName,
      ticker: quote.symbol,
      price: quote.latestPrice,
      change: quote.change,
      logo: logo
    }
    const co = this.state.companies;
    co.push(company);
    this.setState({ companies: co, ticker: "" });
  }


  render() {
    return (
      <div className="app" >
        <Header />
        <hr />
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          ticker={this.state.ticker}
        />
        <hr />
        <Main
          quoteData={this.state.quoteData}
          dividendsData={this.state.dividendsData}
          logo={this.state.logo}
          companyData={this.state.companyData}
          newsData={this.state.newsData}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          companies={this.state.companies}
          handleRemove={this.handleRemove}
          getCompanyData={this.getCompanyData}
          ticker={this.state.ticker}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
