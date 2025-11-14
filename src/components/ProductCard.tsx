import { Product } from '@/types/product';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden card-hover border-border/50 bg-gradient-to-br from-card to-accent/20 backdrop-blur-sm">
      <div className="aspect-square image-zoom-container bg-gradient-to-br from-muted to-accent/40 relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover image-zoom"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Badge variant="secondary" className="shadow-md backdrop-blur-sm bg-background/90 animate-fade-in">
            {product.category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="font-semibold text-lg line-clamp-1 mb-2 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300 inline-block">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground font-medium transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
            {product.stock} in stock
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          className="w-full gap-2 button-feedback hover:scale-105 hover:shadow-glow"
        >
          <ShoppingCart className="h-4 w-4 group-hover:animate-pulse" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
