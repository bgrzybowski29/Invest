import axios from 'axios';

export const getStockQuote = async (ticker) => {
  const url = `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=pk_210068cb77984edcac835b9f829e946d`;
  const resp = await axios.get(url);
  return resp.data;
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
  debugger;
  if (typeof (Storage) !== "undefined") {
    if (localStorage.symbols !== "undefined") {
      return JSON.parse(localStorage.symbols);
    } else {
      const resp = await getSymbolsInternal();
      localStorage.symbols = JSON.stringify(resp);
      return resp;
    }
  } else {
    return await getSymbolsInternal();
  }

}
const getSymbolsInternal = async () => {
  const url = `https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_210068cb77984edcac835b9f829e946d`;
  const resp = await axios.get(url);
  return resp.data;
}