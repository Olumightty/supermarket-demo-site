
"use client";

import Link from 'next/link';
import type { Category } from '@/types';
import { Card, CardContent } from '@/components/ui/card'; // Removed CardHeader as it's not used
import { Badge } from '@/components/ui/badge';
import { Apple, Cookie, Carrot, Milk, Sandwich, GlassWater, type LucideProps } from 'lucide-react'; // Import specific icons

interface CategoryCardProps {
  category: Category;
}

// Map icon names to actual Lucide components
const iconComponents: { [key: string]: React.FC<LucideProps> } = {
  Apple,
  Cookie,
  Carrot,
  Milk,
  Sandwich,
  GlassWater,
};

export function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = iconComponents[category.iconName];

  if (!IconComponent) {
    console.warn(`Icon component not found for name: ${category.iconName}`);
    // Optionally, render a default icon or null
    return null; 
  }

  return (
    <Link href={category.href} passHref>
      <Card className={`relative overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 ${category.borderColorClass || 'border-t-transparent'} border-t-4 group`}>
        {category.discount && (
          <Badge variant="destructive" className="absolute top-2 right-2 z-10 text-xs">
            {category.discount}
          </Badge>
        )}
        <CardContent className="p-4 pt-6 flex flex-col items-center text-center">
          <div className={`p-3 rounded-full mb-3 ${category.iconBgClass || 'bg-muted'}`}>
            <IconComponent size={32} className="text-primary group-hover:text-accent transition-colors" />
          </div>
          <h3 className="text-md font-semibold mb-1">{category.name}</h3>
          <p className="text-xs text-muted-foreground">{category.itemCount} Items</p>
        </CardContent>
      </Card>
    </Link>
  );
}
