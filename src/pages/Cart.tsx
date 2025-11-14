import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  const handleCheckout = () => {
    toast.success('Order placed successfully!', {
      description: `Total: $${totalPrice.toFixed(2)}`
    });
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="container min-h-screen py-16">
        <div className="mx-auto max-w-2xl">
          <div className="flex min-h-[500px] flex-col items-center justify-center rounded-lg border border-dashed fade-in-up">
            <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground animate-pulse" />
            <h2 className="mb-2 text-2xl font-bold gradient-text">Your cart is empty</h2>
            <p className="mb-6 text-muted-foreground">
              Start adding some amazing products!
            </p>
            <Link to="/products">
              <Button className="button-feedback hover:scale-105">Browse Products</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container min-h-screen py-8">
      <div className="mb-6 fade-in-up">
        <Link to="/products">
          <Button variant="ghost" className="gap-2 button-feedback hover:scale-105">
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Button>
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="fade-in-up stagger-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="gradient-text">Shopping Cart ({items.length})</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearCart}
                  className="text-destructive hover:text-destructive button-feedback hover:scale-105"
                >
                  Clear Cart
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item, index) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b last:border-0 slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="image-zoom-container h-24 w-24 rounded-lg bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-lg object-cover image-zoom"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-semibold hover:text-primary transition-colors duration-300">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 button-feedback hover:scale-110 hover:border-primary"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="h-8 w-16 text-center"
                          min="1"
                          max={item.stock}
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 button-feedback hover:scale-110 hover:border-primary"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= item.stock}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <span className="font-semibold gradient-text">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-destructive hover:text-destructive button-feedback hover:scale-110"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="fade-in-up stagger-2 pulse-glow">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm slide-in-left">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm slide-in-left" style={{ animationDelay: '0.1s' }}>
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-primary font-medium">Free</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-lg font-bold slide-in-left" style={{ animationDelay: '0.2s' }}>
                  <span>Total</span>
                  <span className="gradient-text text-2xl">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button className="w-full button-feedback hover:scale-105 hover:shadow-glow" onClick={handleCheckout}>
                Checkout
              </Button>
              <Link to="/products" className="w-full">
                <Button variant="outline" className="w-full button-feedback hover:scale-105">
                  Continue Shopping
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
