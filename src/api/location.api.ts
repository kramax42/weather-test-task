import axios from 'axios';

import { apiTokens } from '@/constants/api-tokens';
import { urls } from '@/constants/api-urls';
import { MAX_SUGGESTED_LOCATIONS } from '@/constants/search-loaction.config';
import { Coords, Location } from '@/types/common';
import { GeoapifyLoactionResponse } from '@/types/location-api/location-geoapify';
import { LocationByNameResponseOpenweather } from '@/types/location-api/location-openweather';
import { formatOpenWeatherLocationResponse } from '@/utils/format-api-response';
import { createUrl } from '@/utils/format-url-params';

export const locationApi = {
  getLocationByCoords: async ({
    latitude,
    longitude,
  }: Coords): Promise<Location> => {
    const { geoapify } = urls;
    const { geoapifyKey } = apiTokens;

    const baseUrl = geoapify;
    const requestParams = {
      lat: latitude,
      lon: longitude,
      format: 'json',
      apiKey: geoapifyKey,
    };

    const url = createUrl(baseUrl, requestParams);
    const { data } = await axios.get<GeoapifyLoactionResponse>(url);

    const { country, city, county, state } = data.results[0];

    return {
      latitude,
      longitude,
      country,
      city: city || county || state || '',
    };
  },

  getSuggestedLocations: async (searchText: string): Promise<Location[]> => {
    const { openweathermapKey } = apiTokens;
    const { openwethermapLocations } = urls;

    const baseUrl = openwethermapLocations;
    const requestParams = {
      q: searchText,
      limit: MAX_SUGGESTED_LOCATIONS,
      appid: openweathermapKey,
    };

    const url = createUrl(baseUrl, requestParams);

    try {
      const { data } = await axios.get<LocationByNameResponseOpenweather>(url);
      return formatOpenWeatherLocationResponse(data);
    } catch (error) {
      return [];
    }
  },
};