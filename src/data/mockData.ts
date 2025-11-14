import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones Pro',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    category: 'Electronics',
    price: 299.99,
    stock: 45,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    featured: true
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    description: 'Advanced fitness tracking and health monitoring smartwatch',
    category: 'Electronics',
    price: 399.99,
    stock: 32,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    featured: true
  },
  {
    id: '3',
    name: 'Premium Yoga Mat',
    description: 'Eco-friendly non-slip yoga mat with carrying strap',
    category: 'Sports',
    price: 49.99,
    stock: 128,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    featured: true
  },
  {
    id: '4',
    name: 'Leather Messenger Bag',
    description: 'Handcrafted genuine leather bag with laptop compartment',
    category: 'Clothing',
    price: 189.99,
    stock: 56,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500',
    featured: true
  },
  {
    id: '5',
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof speaker with 360° sound and 20-hour battery',
    category: 'Electronics',
    price: 79.99,
    stock: 89,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500'
  },
  {
    id: '6',
    name: 'Running Shoes Elite',
    description: 'Professional running shoes with advanced cushioning technology',
    category: 'Sports',
    price: 159.99,
    stock: 67,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'
  },
  {
    id: '7',
    name: 'Coffee Table Book Collection',
    description: 'Curated collection of photography and art books',
    category: 'Books',
    price: 129.99,
    stock: 23,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500'
  },
  {
    id: '8',
    name: 'Minimalist Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and USB charging',
    category: 'Home',
    price: 69.99,
    stock: 94,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500'
  },
  {
    id: '9',
    name: 'Wireless Keyboard & Mouse',
    description: 'Ergonomic wireless combo with long battery life',
    category: 'Electronics',
    price: 89.99,
    stock: 112,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500'
  },
  {
    id: '10',
    name: 'Designer Sunglasses',
    description: 'UV protection polarized sunglasses with premium frames',
    category: 'Clothing',
    price: 149.99,
    stock: 78,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500'
  },
  {
    id: '11',
    name: 'Stainless Steel Water Bottle',
    description: 'Insulated bottle keeps drinks cold for 24 hours',
    category: 'Sports',
    price: 34.99,
    stock: 156,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500'
  },
  {
    id: '12',
    name: 'Smart Home Hub',
    description: 'Voice-controlled hub for all your smart devices',
    category: 'Electronics',
    price: 129.99,
    stock: 41,
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500'
  }
];

export const salesData = [
  { month: '2024-06', orders: 145, revenue: 28450 },
  { month: '2024-07', orders: 168, revenue: 32890 },
  { month: '2024-08', orders: 192, revenue: 38120 },
  { month: '2024-09', orders: 178, revenue: 35670 },
  { month: '2024-10', orders: 203, revenue: 42340 },
  { month: '2024-11', orders: 221, revenue: 47890 }
];

export const topCustomers = [
  { id: '1', name: 'Sarah Johnson', orders: 24, revenue: 4823.50 },
  { id: '2', name: 'Michael Chen', orders: 19, revenue: 3956.80 },
  { id: '3', name: 'Emma Williams', orders: 17, revenue: 3678.90 },
  { id: '4', name: 'James Davis', orders: 15, revenue: 3234.60 },
  { id: '5', name: 'Olivia Martinez', orders: 14, revenue: 2987.40 }
];
