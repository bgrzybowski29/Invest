import React from 'react';
import './App.css';
import { getSymbols, getStockQuote, getLogo, getDividends, getCompanyData, getNews, getFinancials } from './services/api-helper';
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
      symbol: "",
      quoteData: "",
      dividendsData: "",
      logo: "",
      companyData: "",
      newsData: "",
      symbols: [],
      filteredSymbols: [],
    }
  }
  handleChange = (event) => {
    let coName = event.target.value;
    let coSymbol = event.target.value;
    if (event.target.value.length > 2) {
      const startpos = event.target.value.indexOf("-");
      if (startpos > 0) {
        coName = event.target.value.substring(0, startpos);
        coSymbol = event.target.value.substring(startpos + 1, event.target.value.length);
      }
      const filteredSymbols = this.state.symbols.filter(
        key => key.name.toUpperCase().indexOf(coName.toUpperCase()) === 0);
      this.setState({ filteredSymbols })
    }

    this.setState({
      [event.target.name]: coSymbol
    })
  }
  handleRemove = (event) => {
    const result = this.state.companies.filter(co => co.symbol != event.target.name);
    this.setState({ companies: result });
  }
  componentDidMount = async () => {
    const symbols = await getSymbols();
    this.setState({ symbols });
  }
  getCompanyData = async (event) => {
    const coSymbol = event.target.name;
    const dividends = await getDividends(coSymbol);
    const company = await getCompanyData(coSymbol);
    const news = await getNews(coSymbol);
    // let quoteData = JSON.stringify(quote);
    let companyData = JSON.stringify(company);
    let dividendsData = JSON.stringify(dividends);
    let newsData = JSON.stringify(news);

    this.setState({ dividendsData, companyData, newsData });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const coSymbol = this.state.symbol;
    const quote = await getStockQuote(coSymbol);
    const logo = await getLogo(coSymbol);
    const company = {
      name: quote.companyName,
      symbol: quote.symbol,
      price: quote.latestPrice,
      change: quote.change,
      logo: logo
    }
    const co = this.state.companies;
    co.push(company);
    this.setState({ companies: co, symbol: "" });
  }

  render() {
    return (
      <div className="app" >
        <Header />
        <hr />
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          symbol={this.state.symbol}
          symbols={this.state.filteredSymbols}
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
          symbol={this.state.symbol}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
