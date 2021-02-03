export interface Property {
  title: string;
  category: string;
  surface: number;
  rooms: number;
  description: string;
  price: number;
  forSale: boolean;
  photos?: string[];
}
