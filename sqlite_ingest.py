"""
SQLite Database Ingestion Script
Reads CSV files from data/ folder and ingests them into SQLite database
Creates ecom_project.db with proper schema and foreign key relationships
"""

import sqlite3
import csv
import os

# Database file
DB_FILE = 'ecom_project.db'

# Check if data folder exists
if not os.path.exists('data'):
    print("Error: data/ folder not found. Run ecom_data_generator.py first.")
    exit(1)

print("Connecting to database...")
conn = sqlite3.connect(DB_FILE)
cursor = conn.cursor()

# Enable foreign key support
cursor.execute("PRAGMA foreign_keys = ON")

print("Creating tables...")

# Drop existing tables (for clean slate)
tables = ['order_items', 'orders', 'products', 'customers', 'suppliers']
for table in tables:
    cursor.execute(f"DROP TABLE IF EXISTS {table}")

# Create Suppliers table
cursor.execute("""
CREATE TABLE suppliers (
    supplier_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    contact_name TEXT NOT NULL,
    country TEXT NOT NULL
)
""")

# Create Customers table
cursor.execute("""
CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    city TEXT NOT NULL,
    join_date DATE NOT NULL
)
""")

# Create Products table
cursor.execute("""
CREATE TABLE products (
    product_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price REAL NOT NULL,
    stock_quantity INTEGER NOT NULL
)
""")

# Create Orders table
cursor.execute("""
CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    order_date DATE NOT NULL,
    shipping_cost REAL NOT NULL,
    total_amount REAL NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
)
""")

# Create Order Items table
cursor.execute("""
CREATE TABLE order_items (
    order_item_id INTEGER PRIMARY KEY,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    subtotal REAL NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
)
""")

print("Tables created successfully!")

# Function to ingest CSV data
def ingest_csv(filename, table_name):
    print(f"Ingesting {filename}...")
    with open(f'data/{filename}', 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        rows = list(reader)
        
        if not rows:
            print(f"Warning: {filename} is empty")
            return 0
        
        # Get column names from first row
        columns = list(rows[0].keys())
        placeholders = ','.join(['?' for _ in columns])
        
        # Insert data
        for row in rows:
            values = [row[col] for col in columns]
            cursor.execute(f"INSERT INTO {table_name} VALUES ({placeholders})", values)
        
        return len(rows)

# Ingest data in order (respecting foreign keys)
suppliers_count = ingest_csv('suppliers.csv', 'suppliers')
customers_count = ingest_csv('customers.csv', 'customers')
products_count = ingest_csv('products.csv', 'products')
orders_count = ingest_csv('orders.csv', 'orders')
order_items_count = ingest_csv('order_items.csv', 'order_items')

# Commit changes
conn.commit()

print("\n✓ Database ingestion complete!")
print(f"✓ Created {DB_FILE} with the following records:")
print(f"  - suppliers: {suppliers_count} rows")
print(f"  - customers: {customers_count} rows")
print(f"  - products: {products_count} rows")
print(f"  - orders: {orders_count} rows")
print(f"  - order_items: {order_items_count} rows")

# Verify data integrity
print("\nVerifying data integrity...")
cursor.execute("SELECT COUNT(*) FROM customers")
print(f"✓ Customers in database: {cursor.fetchone()[0]}")

cursor.execute("SELECT COUNT(*) FROM orders")
print(f"✓ Orders in database: {cursor.fetchone()[0]}")

cursor.execute("SELECT COUNT(*) FROM order_items")
print(f"✓ Order items in database: {cursor.fetchone()[0]}")

# Close connection
conn.close()
print(f"\n✓ Database connection closed. Ready for queries!")
