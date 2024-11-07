export interface Product {
    id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  isActive: boolean | string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}
