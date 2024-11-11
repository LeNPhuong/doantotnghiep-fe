import axios from 'axios';

export async function callMap(map: string) {
  const options = {
    method: 'GET',
    url: 'https://google-map-places.p.rapidapi.com/maps/api/place/queryautocomplete/json',
    params: {
      input: map,
      radius: '50000',
      language: 'vi',
    },
    headers: {
      'x-rapidapi-key': 'f193554cadmshbf1d85b9486dcb6p1b4735jsn74a2418ec613',
      'x-rapidapi-host': 'google-map-places.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
