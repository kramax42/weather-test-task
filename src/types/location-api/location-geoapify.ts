interface Result {
  datasource: {
    sourcename: string;
    attribution: string;
    license: string;
    url: string;
  };
  housenumber: string;
  street: string;
  suburb: string;
  city: string;
  county: string;
  state: string;
  postcode: string;
  country: string;
  country_code: string;
  lon: number;
  lat: number;
  formatted: string;
  address_line1: string;
  address_line2: string;
  state_code: string;
  result_type: string;
  rank: {
    importance: number;
    popularity: number;
    confidence: number;
    confidence_city_level: number;
    confidence_street_level: number;
    match_type: string;
  };
  timezone: {
    name: string;
    offset_STD: string;
    offset_STD_seconds: number;
    offset_DST: string;
    offset_DST_seconds: number;
    abbreviation_STD: string;
    abbreviation_DST: string;
  };
  place_id: string;
}

interface Query {
  text: '1313 Broadway, Tacoma, WA 98402, United States of America';
  parsed: {
    housenumber: '1313';
    street: 'broadway';
    postcode: '98402';
    city: 'tacoma';
    state: 'wa';
    country: 'united states of america';
    expected_type: 'building';
  };
}

export interface GeoapifyLocationResponse {
  results: Result[];
  query: Query;
}
