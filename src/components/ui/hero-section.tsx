"use client"

import { motion } from "framer-motion"
import { ArrowRight, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  stats?: Array<{
    value: string
    label: string
  }>
  imageUrl?: string
  imageAlt?: string
}

export function HeroSection({
  className,
  title = "ShopHub",
  description = "Discover Amazing Products for Your Lifestyle. Shop the latest in electronics, fashion, home goods, and more. Quality products at unbeatable prices.",
  ctaText = "Shop Now",
  ctaHref = "/shop",
  secondaryCtaText = "View Analytics",
  secondaryCtaHref = "/analytics",
  stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "5K+", label: "Products" },
    { value: "24/7", label: "Support" },
  ],
  imageUrl = "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  imageAlt = "ShopHub Products",
  ...props
}: HeroSectionProps) {
  return (
    <div className={cn("relative overflow-hidden bg-background", className)} {...props}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col items-center gap-12 pb-16 pt-12 sm:pb-24 md:flex-row md:pb-44 md:pt-16">
          <div className="mx-auto max-w-2xl text-center md:mx-0 md:max-w-2xl md:text-left">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>
            
            <motion.p
              className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                size="lg" 
                className="group px-8 py-6 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                onClick={() => window.location.href = ctaHref}
              >
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-base font-medium border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                onClick={() => window.location.href = secondaryCtaHref}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {secondaryCtaText}
              </Button>
            </motion.div>
            
            <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <p className="text-3xl font-bold text-foreground sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            className="relative mt-16 flex justify-center md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl bg-muted/50 p-2 backdrop-blur-md">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted shadow-xl">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute -left-4 -top-4 h-8 w-8 rounded-full bg-primary/20" />
              <div className="absolute -bottom-4 -right-4 h-8 w-8 rounded-full bg-secondary/20" />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background to-transparent sm:h-32" />
    </div>
  )
}
