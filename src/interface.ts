import React from "react";

export interface Country {
    code?: string;
    name: string;
    capital?: string;
    continent?: Continent[]
    language?: Language[]
    emoji?: string
  }

  export interface Continent {
      name: string;
  }
  
  export interface Language {
      name: string;
  } 

 export interface CountryData {
     countries: Country[];
 }



