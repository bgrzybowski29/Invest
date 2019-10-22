import axios from 'axios';
// const baseUrl = `https://cloud.iexapis.com/stable/`;
//https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=sony&apikey=55X1URWO4KSROPDF

export const getStockQuote = async (ticker) => {
  // const url = `https://cloud.iexapis.com/stable/tops?token=pk_210068cb77984edcac835b9f829e946d&symbols=PRU`;
  const url = `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=pk_210068cb77984edcac835b9f829e946d`;
  const resp = await axios.get(url);
  return resp.data;
  //  {"symbol":"PRU","companyName":"Prudential Financial, Inc.","primaryExchange":"New York Stock Exchange","calculationPrice":"close","open":89.39,"openTime":1571146200540,"close":89.95,"closeTime":1571169669507,"high":90.93,"low":88.91,"latestPrice":89.95,"latestSource":"Close","latestTime":"October 15, 2019","latestUpdate":1571169669507,"latestVolume":1466435,"iexRealtimePrice":89.95,"iexRealtimeSize":200,"iexLastUpdated":1571169598866,"delayedPrice":89.95,"delayedPriceTime":1571170200011,"extendedPrice":90.1,"extendedChange":0.15,"extendedChangePercent":0.00167,"extendedPriceTime":1571178600002,"previousClose":89.34,"previousVolume":1149727,"change":0.61,"changePercent":0.00683,"volume":1466435,"iexMarketPercent":0.021228353114867007,"iexVolume":31130,"avgTotalVolume":2309436,"iexBidPrice":0,"iexBidSize":0,"iexAskPrice":0,"iexAskSize":0,"marketCap":36159900000,"peRatio":9.03,"week52High":106.39,"week52Low":75.6,"ytdChange":0.087512,"lastTradeTime":1571169599577,"isUSMarketOpen":false}
}
export const getLogo = async (ticker) => {
  const url = `https://cloud.iexapis.com/stable/stock/${ticker}/logo?token=pk_210068cb77984edcac835b9f829e946d`;
  const resp = await axios.get(url);
  return resp.data.url;
}
export const getDividends = async (ticker) => {
  const url = `https://cloud.iexapis.com/stable/stock/${ticker}/dividends/3m?token=pk_210068cb77984edcac835b9f829e946d`;
  const resp = await axios.get(url);
  return resp.data;
}
export const getCompanyData = async (ticker) => {
  const url = `https://cloud.iexapis.com/stable/stock/${ticker}/company?token=pk_210068cb77984edcac835b9f829e946d`;
  const resp = await axios.get(url);
  return resp.data;
}
export const getNews = async (ticker) => {
  const url = `https://cloud.iexapis.com/stable/stock/${ticker}/news/last/5?token=pk_210068cb77984edcac835b9f829e946d`;
  const resp = await axios.get(url);
  return resp.data;
}
export const getSymbols = async () => {
  const url = `https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_210068cb77984edcac835b9f829e946d`;
  const resp = await axios.get(url);
  return resp.data;
}
