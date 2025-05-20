
import Link from 'next/link';
import Image from 'next/image';
import { ProductGrid } from '@/components/ProductGrid';
import { CategoryCard } from '@/components/CategoryCard';
import { products as mockProducts } from '@/data/products';
import type { Product, Category } from '@/types';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Simulate fetching products
async function getProducts(): Promise<Product[]> {
  return Promise.resolve(mockProducts);
}

// Mock categories data
const categories: Category[] = [
  { id: '1', name: 'Fruits', itemCount: 320, iconName: 'Apple', dataAiHint: 'apple fruit', discount: '30% OFF', href: '#fruits', borderColorClass: 'border-t-primary', iconBgClass: 'bg-primary/10' },
  { id: '2', name: 'Bakery', itemCount: 65, iconName: 'Cookie', dataAiHint: 'cookie bakery', href: '#bakery', borderColorClass: 'border-t-primary', iconBgClass: 'bg-primary/10' },
  { id: '3', name: 'Vegetables', itemCount: 548, iconName: 'Carrot', dataAiHint: 'carrot vegetable', discount: '15% OFF', href: '#vegetables', borderColorClass: 'border-t-secondary', iconBgClass: 'bg-secondary/20' },
  { id: '4', name: 'Dairy & Milk', itemCount: 48, iconName: 'Milk', dataAiHint: 'milk dairy', discount: '10% OFF', href: '#dairy', borderColorClass: 'border-t-blue-400', iconBgClass: 'bg-blue-400/10' },
  { id: '5', name: 'Snack & Spice', itemCount: 59, iconName: 'Sandwich', dataAiHint: 'sandwich snack spice', href: '#snacks', borderColorClass: 'border-t-accent', iconBgClass: 'bg-accent/10' },
  { id: '6', name: 'Juice & Drinks', itemCount: 845, iconName: 'GlassWater', dataAiHint: 'juice drink', href: '#drinks', borderColorClass: 'border-t-sky-400', iconBgClass: 'bg-sky-400/10' },
];

export const metadata = {
  title: 'MarketSim - Fresh Groceries, Amazing Deals',
  description: 'Explore a wide range of fresh products and enjoy simulated shopping at MarketSim.',
};

export default async function HomePage() {
  const productsForDeal = (await getProducts()).filter(p => p.tag === 'SALE').slice(0, 4); // Get a few sale items for the deal section

  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-20">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/hero.jpg"
          alt="Fresh fruits and pastries"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="food pastry"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay for text contrast */}
        <div className="relative z-20 h-full flex flex-col justify-center items-start p-8 md:p-16 text-background">
          <p className="text-lg md:text-xl mb-2 text-accent">Starting at ₦3,000</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Explore the market <br /> fresh foods available
          </h1>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#products">
              Shop Now <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories">
        <h2 className="text-3xl font-semibold mb-8 text-center">Browse By Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Day of the Deal Section */}
      <section id="products">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold">Day Of The Deal</h2>
            <p className="text-muted-foreground mt-1">Don't wait. The time will never be just right.</p>
          </div>
          <div className="flex items-center gap-2 text-lg font-medium">
            <span className="bg-accent text-accent-foreground px-3 py-2 rounded-md text-sm md:text-base">25</span><span className="text-muted-foreground text-sm">Days</span>
            <span className="text-muted-foreground">:</span>
            <span className="bg-accent text-accent-foreground px-3 py-2 rounded-md text-sm md:text-base">23</span>
            <span className="text-muted-foreground">:</span>
            <span className="bg-accent text-accent-foreground px-3 py-2 rounded-md text-sm md:text-base">59</span>
            <span className="text-muted-foreground">:</span>
            <span className="bg-accent text-accent-foreground px-3 py-2 rounded-md text-sm md:text-base">54</span>
          </div>
        </div>
        {productsForDeal.length > 0 ? (
           <ProductGrid products={productsForDeal} />
        ) : (
          <p className="text-center text-muted-foreground">No deals available at the moment. Check back soon!</p>
        )}
      </section>

       {/* All Products Section - reusing title from original page */}
      <section id="all-products">
        <h2 className="text-3xl font-bold tracking-tight text-center md:text-left mb-8">Explore Our Products</h2>
        <ProductGrid products={await getProducts()} />
      </section>
    </div>
  );
}
