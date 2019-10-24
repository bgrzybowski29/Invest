import React from 'react';
import './App.css';
import { getSymbols, getStockQuote, getLogo, getDividends, getCompanyData, getNews } from './services/api-helper';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

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
      coName: "",
    }
  }
  handleChange = (event) => {
    let coName = event.target.value;
    let coSymbol = event.target.attributes["symbol"].value;

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
      [event.target.name]: coSymbol, coName
    })
  }
  handleRemove = (event) => {
    const result = this.state.companies.filter(co => co.symbol !== event.target.name);
    this.setState({ companies: result });
  }

  componentDidMount = async () => {
    const symbols = await getSymbols();
    this.setState({ symbols });
  }
  getCompanyData = async (event) => {
    const result = this.state.companies.filter(co => co.symbol === event.target.name);
    const coSymbol = event.target.name;
    const dividendsData = await getDividends(coSymbol);
    const companyData = await getCompanyData(coSymbol);
    const newsData = await getNews(coSymbol);
    this.setState({ dividendsData, companyData, newsData, logo: result[0].logo });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const coSymbol = this.state.symbol;
    if (coSymbol === "")
      return;
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
    this.setState({ companies: co, symbol: "", coName: "", filteredSymbols: [] });
    document.querySelector("#form-input").value = "";
  }

  render() {
    return (
      <div className="app" >
        <Header />
        <Route exact path="/" render={() => (<Home
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleRemove={this.handleRemove}
          getCompanyData={this.getCompanyData}
          symbol={this.state.symbol}
          symbols={this.state.filteredSymbols}
          quoteData={this.state.quoteData}
          dividendsData={this.state.dividendsData}
          companyData={this.state.companyData}
          newsData={this.state.newsData}
          companies={this.state.companies}
          logo={this.state.logo}
        />)} />
        <Route path="/about" render={() => (<About />)} />
        <Footer />
      </div>
    );
  }
}

export default App;
