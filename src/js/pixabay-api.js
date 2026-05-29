import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '56068284-30f7ab574d20f3e020b06a8c1';

export async function fetchImages(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}