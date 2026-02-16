export interface Property {
  id: string;
  title: string;
  type: 'villa' | 'appartement' | 'terrain' | 'hangar' | 'commerce';
  location: string;
  price: number;
  surface: number;
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  images: string[];
  features: string[];
  latitude?: number;
  longitude?: number;
}

export type PropertyType = 'villa' | 'appartement' | 'terrain' | 'hangar' | 'commerce' | 'all';
