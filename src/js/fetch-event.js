import axios from 'axios';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events';
const API_KEY = 'unEzXyPGRdZtlW4MZOT74rfieLb91xjQ';

export const fetchServer = (page, keyword, countryCode) => {
  const params = {
    apikey: API_KEY,
    countryCode: countryCode,
    keyword: keyword,
    size: 16,
    page: page,
  };
  //   if (countryCode.length) {
  //     params.countryCode = countryCode;
  //   }
  return axios.get(`${BASE_URL}`, { params });
};
