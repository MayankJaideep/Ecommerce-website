# E-Commerce Data Generation & Database Project

A Python-based data pipeline that generates synthetic e-commerce data, ingests it into SQLite, and provides analytical queries.

## 📋 Project Overview

This project creates a complete e-commerce dataset with realistic synthetic data including customers, products, suppliers, orders, and order items. The data is generated using the Faker library and stored in SQLite for analysis.

## 🗂️ Project Structure

```
.
├── ecom_data_generator.py   # Generates synthetic CSV data
├── sqlite_ingest.py          # Creates SQLite DB and ingests data
├── top_customers_query.sql   # SQL query for top customers analysis
├── git_commands.sh           # Git initialization commands
├── data/                     # Generated CSV files (created by script)
│   ├── customers.csv
│   ├── products.csv
│   ├── suppliers.csv
│   ├── orders.csv
│   └── order_items.csv
└── ecom_project.db          # SQLite database (created by script)
```

## 🚀 Getting Started

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

### Installation

1. Install required Python package:
```bash
pip install faker
```

### Usage

#### Phase 1: Generate Data

Run the data generator script to create CSV files:

```bash
python ecom_data_generator.py
```

This will create a `data/` folder with 5 CSV files:
- `customers.csv` (1,000 rows)
- `products.csv` (1,000 rows)
- `suppliers.csv` (50 rows)
- `orders.csv` (2,000 rows)
- `order_items.csv` (5,000 rows)

#### Phase 2: Ingest into Database

After generating the CSV files, run the ingestion script:

```bash
python sqlite_ingest.py
```

This creates `ecom_project.db` with all tables and data properly loaded.

#### Phase 3: Run SQL Queries

Query the database using the SQLite command line:

```bash
sqlite3 ecom_project.db < top_customers_query.sql
```

Or using Python:

```python
import sqlite3

conn = sqlite3.connect('ecom_project.db')
cursor = conn.cursor()

with open('top_customers_query.sql', 'r') as f:
    query = f.read()
    cursor.execute(query)
    
for row in cursor.fetchall():
    print(row)

conn.close()
```

## 📊 Database Schema

### Tables

**customers**
- customer_id (INTEGER, PRIMARY KEY)
- name (TEXT)
- email (TEXT, UNIQUE)
- city (TEXT)
- join_date (DATE)

**products**
- product_id (INTEGER, PRIMARY KEY)
- name (TEXT)
- category (TEXT)
- price (REAL)
- stock_quantity (INTEGER)

**suppliers**
- supplier_id (INTEGER, PRIMARY KEY)
- name (TEXT)
- contact_name (TEXT)
- country (TEXT)

**orders**
- order_id (INTEGER, PRIMARY KEY)
- customer_id (INTEGER, FOREIGN KEY → customers)
- order_date (DATE)
- shipping_cost (REAL)
- total_amount (REAL)

**order_items**
- order_item_id (INTEGER, PRIMARY KEY)
- order_id (INTEGER, FOREIGN KEY → orders)
- product_id (INTEGER, FOREIGN KEY → products)
- quantity (INTEGER)
- subtotal (REAL)

## 🔍 SQL Query Details

The `top_customers_query.sql` file contains a complex query that:

1. Joins `customers`, `orders`, `order_items`, and `products` tables
2. Calculates total spending per customer
3. Identifies each customer's most frequently purchased product category
4. Returns the top 10 customers by total spending

### Output Columns:
- `customer_id` - Unique customer identifier
- `customer_name` - Customer's full name
- `total_spent` - Total amount spent by customer
- `favorite_category` - Most purchased product category

## 🔧 Git Setup

To initialize a Git repository and push to GitHub:

1. Make the git commands script executable:
```bash
chmod +x git_commands.sh
```

2. Initialize Git repository:
```bash
git init
git add .
git commit -m "Initial commit: E-commerce data pipeline"
```

3. Create a new repository on GitHub, then:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## 📝 Notes

- The data is entirely synthetic and generated using the Faker library
- Foreign key constraints are enforced in SQLite
- The script uses a fixed random seed (42) for reproducibility
- Order totals are calculated automatically based on order items

## 🛠️ Customization

To modify the dataset size, edit the constants at the top of `ecom_data_generator.py`:

```python
NUM_CUSTOMERS = 1000
NUM_PRODUCTS = 1000
NUM_SUPPLIERS = 50
NUM_ORDERS = 2000
NUM_ORDER_ITEMS = 5000
```

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!
