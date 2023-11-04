export interface CountryInfoType {
  continent: string;
  countryEng: string;
  countryKor: string;
  flagImage: string;
  lat: number;
  lan: number;
  travelHistory: string[];
}

export interface CityInfoType {
  countryEng: string;
  cityEng: string;
  countryKor: string;
  cityKor: string;
  flagImage: string;
  lat: number;
  lan: number;
}
