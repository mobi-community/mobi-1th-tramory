import { StaticImageData } from 'next/image';

export interface CountryInfoType {
  continent: string;
  countryEng: string;
  countryKor: string;
  flagImage: StaticImageData;
  lat: number;
  lan: number;
  travelHistory: string[];
}

export interface CityInfoType {
  countryEng: string;
  cityEng: string;
  countryKor: string;
  cityKor: string;
  flagImage: StaticImageData;
  lat: number;
  lan: number;
}
