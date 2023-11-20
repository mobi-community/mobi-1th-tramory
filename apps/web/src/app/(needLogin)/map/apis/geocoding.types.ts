interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface Geometry {
  location: {
    lat: number;
    lng: number;
  };
}

interface Result {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: Geometry;
}

export interface GeocodeResponse {
  results?: Result[];
}
