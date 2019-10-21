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
  // [{"exDate":"2019-08-19","paymentDate":"2019-09-12","recordDate":"2019-08-20","declaredDate":"2019-08-06","amount":1,"flag":"No Change QoQ","currency":"USD","description":"Prudential Financial Declares Quarterly Dividend of $1.00 Per Share","frequency":"Quarterly","date":"2019-10-16"}]
}
export const getCompanyData = async (ticker) => {
  const url = `https://cloud.iexapis.com/stable/stock/${ticker}/company?token=pk_210068cb77984edcac835b9f829e946d`;
  const resp = await axios.get(url);
  return resp.data;
  // {"symbol":"PRU","companyName":"Prudential Financial, Inc.","exchange":"New York Stock Exchange","industry":"Financial Conglomerates","website":"http://www.prudential.com","description":"Prudential Financial, Inc. engages in the provision of financial products and services including life insurance, annuities, mutual funds, and investment management to both individual and institutional customers. It operates through the following segments: U.S. Individual Solutions, U.S. Workplace Solutions, PGIM, International Insurance, Closed Block, and Corporate and Others. The U.S. Individual Solutions segment consists of individual annuities and individual life products. The U.S. Workplace Solutions segment comprises of the retirement and group insurance divisions. The PGIM segment provides a broad array of asset management and advisory services related to public and private fixed income, public equity and real estate, commercial mortgage origination and servicing, and mutual funds and other retail services to institutional, private and sub-advisory clients (including mutual funds), insurance company separate accounts, government sponsored entities and the Company's general account. The International Insurances segment manufactures and distributes individual life insurance, retirement, and related products to the mass affluent and affluent markets in Japan, Korea, and other foreign countries through its Life Planner operations. The Closed Block segment includes certain in force participating insurance and annuity products and corresponding assets that are used for the payment of benefits, expenses and policyholders' dividends related to these products. The Corporate and Other Operations segment include corporate item or businesses that have been or will be divested. The company was founded by John Fairfield Dryden in 1875 and is headquartered in Newark, NJ.","CEO":"Charlie F. Lowrey","securityName":"Prudential Financial, Inc.","issueType":"cs","sector":"Finance","primarySicCode":6311,"employees":50492,"tags":["Finance","Financial Conglomerates"],"address":"751 Broad Street","address2":null,"state":"NJ","city":"Newark","zip":"07102","country":"US","phone":"1.973.802.6000"}
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
