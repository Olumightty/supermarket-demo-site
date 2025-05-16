"use client";

import Image from 'next/image';
import type { CartItem } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MinusCircle, PlusCircle, Trash2 } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';

interface CartItemRowProps {
  item: CartItem;
}

export function CartItemRow({ item }: CartItemRowProps) {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 0) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId: item.id, quantity: newQuantity } });
    if (newQuantity === 0) {
      toast({
        title: "Item removed",
        description: `${item.name} removed from cart.`,
      });
    }
  };

  const handleRemoveItem = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: item.id });
    toast({
      title: "Item removed",
      description: `${item.name} removed from cart.`,
    });
  };

  return (
    <TableRow>
      <TableCell className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-md overflow-hidden">
          <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" data-ai-hint={item.dataAiHint} />
        </div>
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(item.quantity - 1)} aria-label="Decrease quantity">
            <MinusCircle size={20} />
          </Button>
          <Input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
            className="w-16 text-center"
            min="0"
            aria-label={`Quantity for ${item.name}`}
          />
          <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(item.quantity + 1)} aria-label="Increase quantity">
            <PlusCircle size={20} />
          </Button>
        </div>
      </TableCell>
      <TableCell className="text-right font-medium">${(item.price * item.quantity).toFixed(2)}</TableCell>
      <TableCell className="text-right">
        <Button variant="ghost" size="icon" onClick={handleRemoveItem} className="text-destructive hover:text-destructive/80" aria-label={`Remove ${item.name} from cart`}>
          <Trash2 size={20} />
        </Button>
      </TableCell>
    </TableRow>
  );
}
