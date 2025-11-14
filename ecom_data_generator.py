"""
E-Commerce Data Generator
Generates synthetic e-commerce data using Faker library
Creates 5 CSV files with 1000+ rows each
"""

from faker import Faker
import csv
import os
from datetime import datetime, timedelta
import random

# Initialize Faker
fake = Faker()
Faker.seed(42)  # For reproducibility

# Create data directory
os.makedirs('data', exist_ok=True)

# Configuration
NUM_CUSTOMERS = 1000
NUM_PRODUCTS = 1000
NUM_SUPPLIERS = 50
NUM_ORDERS = 2000
NUM_ORDER_ITEMS = 5000

print("Starting data generation...")

# 1. Generate Suppliers (must be first as products reference them)
print(f"Generating {NUM_SUPPLIERS} suppliers...")
suppliers = []
for i in range(1, NUM_SUPPLIERS + 1):
    suppliers.append({
        'supplier_id': i,
        'name': fake.company(),
        'contact_name': fake.name(),
        'country': fake.country()
    })

with open('data/suppliers.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=['supplier_id', 'name', 'contact_name', 'country'])
    writer.writeheader()
    writer.writerows(suppliers)

# 2. Generate Customers
print(f"Generating {NUM_CUSTOMERS} customers...")
customers = []
for i in range(1, NUM_CUSTOMERS + 1):
    customers.append({
        'customer_id': i,
        'name': fake.name(),
        'email': fake.email(),
        'city': fake.city(),
        'join_date': fake.date_between(start_date='-3y', end_date='today').strftime('%Y-%m-%d')
    })

with open('data/customers.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=['customer_id', 'name', 'email', 'city', 'join_date'])
    writer.writeheader()
    writer.writerows(customers)

# 3. Generate Products
print(f"Generating {NUM_PRODUCTS} products...")
categories = ['Electronics', 'Clothing', 'Home & Garden', 'Books', 'Sports & Outdoors', 
              'Toys', 'Beauty', 'Automotive', 'Food & Beverage', 'Health']
products = []
for i in range(1, NUM_PRODUCTS + 1):
    products.append({
        'product_id': i,
        'name': fake.catch_phrase(),
        'category': random.choice(categories),
        'price': round(random.uniform(5.99, 999.99), 2),
        'stock_quantity': random.randint(0, 500)
    })

with open('data/products.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=['product_id', 'name', 'category', 'price', 'stock_quantity'])
    writer.writeheader()
    writer.writerows(products)

# 4. Generate Orders
print(f"Generating {NUM_ORDERS} orders...")
orders = []
for i in range(1, NUM_ORDERS + 1):
    order_date = fake.date_between(start_date='-2y', end_date='today')
    orders.append({
        'order_id': i,
        'customer_id': random.randint(1, NUM_CUSTOMERS),
        'order_date': order_date.strftime('%Y-%m-%d'),
        'shipping_cost': round(random.uniform(0, 25.99), 2),
        'total_amount': 0  # Will be calculated after order_items
    })

with open('data/orders.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=['order_id', 'customer_id', 'order_date', 'shipping_cost', 'total_amount'])
    writer.writeheader()
    writer.writerows(orders)

# 5. Generate Order Items
print(f"Generating {NUM_ORDER_ITEMS} order items...")
order_items = []
order_totals = {i: 0 for i in range(1, NUM_ORDERS + 1)}

for i in range(1, NUM_ORDER_ITEMS + 1):
    order_id = random.randint(1, NUM_ORDERS)
    product = random.choice(products)
    quantity = random.randint(1, 5)
    subtotal = round(product['price'] * quantity, 2)
    order_totals[order_id] += subtotal
    
    order_items.append({
        'order_item_id': i,
        'order_id': order_id,
        'product_id': product['product_id'],
        'quantity': quantity,
        'subtotal': subtotal
    })

with open('data/order_items.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=['order_item_id', 'order_id', 'product_id', 'quantity', 'subtotal'])
    writer.writeheader()
    writer.writerows(order_items)

# Update orders with total amounts
print("Updating order totals...")
for order in orders:
    order['total_amount'] = round(order_totals[order['order_id']] + order['shipping_cost'], 2)

with open('data/orders.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=['order_id', 'customer_id', 'order_date', 'shipping_cost', 'total_amount'])
    writer.writeheader()
    writer.writerows(orders)

print("\n✓ Data generation complete!")
print(f"✓ Created data/ folder with 5 CSV files:")
print(f"  - customers.csv ({NUM_CUSTOMERS} rows)")
print(f"  - products.csv ({NUM_PRODUCTS} rows)")
print(f"  - suppliers.csv ({NUM_SUPPLIERS} rows)")
print(f"  - orders.csv ({NUM_ORDERS} rows)")
print(f"  - order_items.csv ({NUM_ORDER_ITEMS} rows)")
