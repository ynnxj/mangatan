export interface Item {
  _id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  image_url: string;
  in_stock: boolean;
  stock_count: number;
}
