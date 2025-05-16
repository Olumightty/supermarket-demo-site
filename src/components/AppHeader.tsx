"use client";

import Link from 'next/link';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';

export function AppHeader() {
  const { state } = useCart();
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <Leaf size={28} />
          MarketSim
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="/cart" className="relative text-foreground hover:text-primary transition-colors">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-3 px-2 py-0.5 text-xs rounded-full bg-accent text-accent-foreground"
              >
                {totalItems}
              </Badge>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
