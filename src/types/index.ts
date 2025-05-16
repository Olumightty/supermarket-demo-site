
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // Current price (sale price if originalPrice is set)
  originalPrice?: number; // Original price before discount
  image: string;
  dataAiHint: string;
  tag?: 'SALE' | 'NEW'; // Tag for the product
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  itemCount: number;
  iconName: string; // Changed from icon: React.ElementType
  dataAiHint: string;
  discount?: string; // e.g., "30% OFF"
  href: string; // Link for the category
  borderColorClass?: string; // Tailwind class for top border color e.g. border-t-primary
  iconBgClass?: string; // Tailwind class for icon background e.g. bg-primary/10
}
