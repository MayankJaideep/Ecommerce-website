export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'Electronics' | 'Clothing' | 'Home' | 'Books' | 'Sports';
  price: number;
  stock: number;
  image: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  customerId: string;
  date: string;
  total: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: string;
  items: CartItem[];
}
