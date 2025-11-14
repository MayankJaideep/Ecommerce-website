import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/mockData';
import { ArrowRight, Sparkles } from 'lucide-react';

const Home = () => {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent to-background -z-10 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary-glow)/0.15),transparent_50%)] -z-10" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent border border-primary/20 px-4 py-2 text-sm font-medium text-primary shadow-md fade-in-up">
              <Sparkles className="h-4 w-4 animate-pulse" />
              ✨ New Arrivals Every Week
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl gradient-text leading-tight fade-in-up stagger-1">
              Discover Amazing Products for Your Lifestyle
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl leading-relaxed fade-in-up stagger-2">
              Shop the latest in electronics, fashion, home goods, and more. Quality products at unbeatable prices.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 fade-in-up stagger-3">
              <Link to="/products">
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl button-feedback hover:scale-105">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/admin">
                <Button size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm shadow-md button-feedback hover:scale-105">
                  View Analytics
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl gradient-text fade-in-up">Featured Products</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto fade-in-up stagger-1">
              Hand-picked items just for you
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center fade-in-up stagger-4">
            <Link to="/products">
              <Button variant="outline" size="lg" className="gap-2 shadow-md hover:shadow-lg button-feedback hover:scale-105">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border/50 bg-muted/30 py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center fade-in-up stagger-1">
              <div className="mb-4 inline-flex p-4 rounded-2xl bg-primary/10 pulse-glow">
                <span className="text-5xl font-bold gradient-text">50+</span>
              </div>
              <div className="text-muted-foreground font-medium text-lg">Products Available</div>
            </div>
            <div className="text-center fade-in-up stagger-2">
              <div className="mb-4 inline-flex p-4 rounded-2xl bg-primary/10 pulse-glow">
                <span className="text-5xl font-bold gradient-text">1000+</span>
              </div>
              <div className="text-muted-foreground font-medium text-lg">Happy Customers</div>
            </div>
            <div className="text-center fade-in-up stagger-3">
              <div className="mb-4 inline-flex p-4 rounded-2xl bg-primary/10 pulse-glow">
                <span className="text-5xl font-bold gradient-text">5★</span>
              </div>
              <div className="text-muted-foreground font-medium text-lg">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
