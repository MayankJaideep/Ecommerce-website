import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/mockData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

const categories = ['All', 'Electronics', 'Clothing', 'Home', 'Books', 'Sports'] as const;

const Products = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('All');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                          product.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        <div className="mb-8 fade-in-up">
          <h1 className="mb-4 text-4xl font-bold gradient-text">All Products</h1>
          <p className="text-muted-foreground">
            Browse our complete collection of {products.length} amazing products
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4 fade-in-up stagger-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 button-feedback"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="button-feedback hover:scale-105 slide-in-left"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-6 fade-in-up stagger-2">
          <Badge variant="secondary" className="animate-fade-in">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </Badge>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed fade-in-up">
            <p className="mb-2 text-lg font-medium">No products found</p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
