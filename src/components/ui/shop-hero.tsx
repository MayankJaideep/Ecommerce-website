'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, ArrowRight, Star, Shield, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ShopHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,transparent,black_70%)] dark:bg-grid-gray-800/20" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center py-16 text-center sm:py-24 lg:max-w-none lg:py-32">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-800/50 dark:text-gray-200"
          >
            <span>✨</span>
            <span>New Arrivals Every Week</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Discover Amazing Products
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              For Your Lifestyle
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
          >
            Shop the latest in electronics, fashion, home goods, and more. Quality products at unbeatable prices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="px-8 py-6 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
              onClick={() => window.location.href = '/shop'}
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-base font-medium border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
              onClick={() => window.location.href = '/analytics'}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              View Analytics
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div 
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: <Star className="h-6 w-6 text-yellow-500" />, text: 'Premium Quality' },
              { icon: <Shield className="h-6 w-6 text-green-500" />, text: 'Secure Checkout' },
              { icon: <Truck className="h-6 w-6 text-blue-500" />, text: 'Fast Shipping' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                  {item.icon}
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
