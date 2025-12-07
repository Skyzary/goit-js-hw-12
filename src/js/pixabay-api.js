import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '47301858-8ff081a19a6e75e487e16544c';

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 15,
      page: page,
    },
  });
  return response.data;
}
