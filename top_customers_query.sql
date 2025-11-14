-- Top 10 Customers by Total Spent with Favorite Category
-- This query joins customers, orders, order_items, and products tables
-- to find the top customers and their most purchased product category

WITH customer_spending AS (
    -- Calculate total spending per customer
    SELECT 
        c.customer_id,
        c.name AS customer_name,
        SUM(o.total_amount) AS total_spent
    FROM customers c
    INNER JOIN orders o ON c.customer_id = o.customer_id
    GROUP BY c.customer_id, c.name
),
customer_category_purchases AS (
    -- Calculate purchases per category per customer
    SELECT 
        c.customer_id,
        p.category,
        COUNT(oi.order_item_id) AS category_purchase_count,
        SUM(oi.subtotal) AS category_total_spent
    FROM customers c
    INNER JOIN orders o ON c.customer_id = o.customer_id
    INNER JOIN order_items oi ON o.order_id = oi.order_id
    INNER JOIN products p ON oi.product_id = p.product_id
    GROUP BY c.customer_id, p.category
),
ranked_categories AS (
    -- Rank categories for each customer by purchase count
    SELECT 
        customer_id,
        category,
        category_purchase_count,
        ROW_NUMBER() OVER (
            PARTITION BY customer_id 
            ORDER BY category_purchase_count DESC, category_total_spent DESC
        ) AS category_rank
    FROM customer_category_purchases
)
-- Final result: Top 10 customers with their favorite category
SELECT 
    cs.customer_id,
    cs.customer_name,
    ROUND(cs.total_spent, 2) AS total_spent,
    rc.category AS favorite_category
FROM customer_spending cs
LEFT JOIN ranked_categories rc 
    ON cs.customer_id = rc.customer_id 
    AND rc.category_rank = 1
ORDER BY cs.total_spent DESC
LIMIT 10;
