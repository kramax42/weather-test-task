interface Location {
  name: string;
  local_names: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
}

export type LocationByNameResponseOpenweather = Location[];
