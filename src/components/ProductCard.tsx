
"use client";

import Image from 'next/image';
import type { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] relative">
      {product.tag && (
        <Badge
          variant={product.tag === 'SALE' ? 'destructive' : 'secondary'}
          className="absolute top-2 right-2 z-10"
        >
          {product.tag}
        </Badge>
      )}
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative w-full">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={product.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg mb-1">{product.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-2 h-12 overflow-hidden text-ellipsis">
          {product.description}
        </CardDescription>
        <div className="flex items-baseline gap-2">
          <p className="text-xl font-semibold text-primary">${product.price.toFixed(2)}</p>
          {product.originalPrice && (
            <p className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <ShoppingCart size={18} className="mr-2" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
