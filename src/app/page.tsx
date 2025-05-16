import { ProductGrid } from '@/components/ProductGrid';
import { products as mockProducts } from '@/data/products'; // Using mock data for now
import type { Product } from '@/types';

// Simulate fetching products
async function getProducts(): Promise<Product[]> {
  // In a real app, this would be an API call
  return Promise.resolve(mockProducts);
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-center md:text-left">Explore Our Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}
