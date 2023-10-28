import { StaticImageData } from 'next/image';

export interface countryInfoType {
  countryEng: string;
  countryKor: string;
  flagImage: StaticImageData;
  lat: number;
  lan: number;
  travelHistory: string[];
}

export interface cityInfoType {
  countryEng: string;
  cityEng: string;
  countryKor: string;
  cityKor: string;
  flagImage: StaticImageData;
  lat: number;
  lan: number;
}
