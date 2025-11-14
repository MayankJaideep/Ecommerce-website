import { Link } from 'react-router-dom';
import { ShoppingCart, Store, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

export const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary-glow group-hover:scale-110 transition-transform">
            <Store className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="gradient-text">
            ShopHub
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link to="/products">
            <Button variant="ghost" className="hover:bg-accent/60">Products</Button>
          </Link>
          <Link to="/admin">
            <Button variant="ghost" className="gap-2 hover:bg-accent/60">
              <LayoutDashboard className="h-4 w-4" />
              Admin
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="outline" className="relative gap-2 shadow-sm hover:shadow-md transition-shadow border-border/60">
              <ShoppingCart className="h-4 w-4" />
              Cart
              {totalItems > 0 && (
                <Badge variant="default" className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center shadow-lg animate-in zoom-in-50">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
