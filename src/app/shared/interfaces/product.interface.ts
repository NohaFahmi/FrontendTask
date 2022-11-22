export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  rating: number;
  category: string;
  images: string[];
  thumbnail: string;
}
export interface IProductsResponse {
  products: IProduct[];
  total: number;
  limit: number;
  skip: number;
}
