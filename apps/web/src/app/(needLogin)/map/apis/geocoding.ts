import axios from 'axios';

import { GeocodeResponse } from './geocoding.types';

export const getGoogleGeocode = async (
  inputVal: string
): Promise<GeocodeResponse> => {
  const apiKey = process.env.NEXT_PUBLIC_MAP_API_KEY;

  const url = `${
    process.env.NEXT_PUBLIC_GOOGLE_GEOCODE_URL
  }?address=${encodeURIComponent(inputVal)}&key=${apiKey}&language=ko`;

  const { data } = await axios.get<GeocodeResponse>(url);

  return data;
};
