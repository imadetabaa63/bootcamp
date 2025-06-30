/*const API_KEY = 'T9WEv6YY137wLl6mk1VDa8d8T58unQT0p8E0OJttISxhKMrSIGW2ifr0';
const BASE_URL = 'https://api.pexels.com/v1/search';

export const fetchImages = async (query, perPage = 30) => {
  const res = await fetch(`${BASE_URL}?query=${query}&per_page=${perPage}`, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const data = await res.json();
  return data.photos;
};*/

const API_KEY ='T9WEv6YY137wLl6mk1VDa8d8T58unQT0p8E0OJttISxhKMrSIGW2ifr0';
const BASE_URL = 'https://api.pexels.com/v1/search';

export const fetchImages = async (query, perPage = 30) => {
  const res = await fetch(`${BASE_URL}?query=${query}&per_page=${perPage}`, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const data = await res.json();
  return data.photos;
};

