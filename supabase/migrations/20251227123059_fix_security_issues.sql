/*
  # Fix Security Issues
  
  1. Add Indexes for Foreign Keys
    - Add indexes for order_items.order_id
    - Add indexes for order_items.product_id
    - Add indexes for orders.customer_id
    - Add indexes for reviews.product_id
  
  2. Clean Up Duplicate RLS Policies
    - Remove conflicting policies
    - Keep only the most permissive ones
  
  3. Re-enable RLS for Orders Tables
    - Enable RLS for orders
    - Enable RLS for order_items
    - Create proper policies that allow anonymous orders
  
  4. Fix Function Search Paths
    - Set search_path for functions to prevent security issues
  
  5. Performance Indexes
    - Add indexes on frequently queried columns
*/

-- ============================================
-- 1. ADD INDEXES FOR FOREIGN KEYS
-- ============================================

-- Index for order_items.order_id (most frequently queried)
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);

-- Index for order_items.product_id
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);

-- Index for orders.customer_id
CREATE INDEX IF NOT EXISTS idx_orders_customer_id ON orders(customer_id);

-- Index for reviews.product_id
CREATE INDEX IF NOT EXISTS idx_reviews_product_id ON reviews(product_id);

-- Additional performance indexes
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

-- ============================================
-- 2. CLEAN UP DUPLICATE RLS POLICIES
-- ============================================

-- Customers table - keep only necessary policies
DROP POLICY IF EXISTS "Customers can be managed by authenticated users" ON customers;
DROP POLICY IF EXISTS "Customers can view their own data" ON customers;
-- Keep: "Anyone can create customer records"

-- Newsletter - keep only necessary policies
DROP POLICY IF EXISTS "Newsletter can be managed by authenticated users" ON newsletter_subscribers;
-- Keep: "Anyone can subscribe to newsletter"

-- Products - keep only necessary policies
DROP POLICY IF EXISTS "Products can be managed by authenticated users" ON products;
-- Keep: "Products are viewable by everyone"

-- Project gallery - keep only necessary policies
DROP POLICY IF EXISTS "Project gallery can be managed by authenticated users" ON project_gallery;
-- Keep: "Project gallery is viewable by everyone"

-- Reviews - keep only necessary policies
DROP POLICY IF EXISTS "Reviews can be managed by authenticated users" ON reviews;
-- Keep: "Anyone can submit reviews" and "Approved reviews are viewable by everyone"

-- Services - keep only necessary policies
DROP POLICY IF EXISTS "Services can be managed by authenticated users" ON services;
-- Keep: "Services are viewable by everyone"

-- ============================================
-- 3. FIX ORDERS AND ORDER_ITEMS RLS
-- ============================================

-- Drop all existing policies for orders and order_items
DROP POLICY IF EXISTS "Anyone can create orders" ON orders;
DROP POLICY IF EXISTS "Customers can view their own orders" ON orders;
DROP POLICY IF EXISTS "Orders can be managed by authenticated users" ON orders;
DROP POLICY IF EXISTS "Anyone can create order items" ON order_items;
DROP POLICY IF EXISTS "Order items are viewable with orders" ON order_items;
DROP POLICY IF EXISTS "Order items can be managed by authenticated users" ON order_items;

-- Enable RLS on orders
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Enable RLS on order_items
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Orders policies: Allow everyone to INSERT (for checkout), but only authenticated can view/manage
CREATE POLICY "public_can_create_orders"
  ON orders
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "authenticated_can_view_all_orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "authenticated_can_update_orders"
  ON orders
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "authenticated_can_delete_orders"
  ON orders
  FOR DELETE
  TO authenticated
  USING (true);

-- Order items policies: Allow everyone to INSERT (for checkout), but only authenticated can view/manage
CREATE POLICY "public_can_create_order_items"
  ON order_items
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "authenticated_can_view_all_order_items"
  ON order_items
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "authenticated_can_update_order_items"
  ON order_items
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "authenticated_can_delete_order_items"
  ON order_items
  FOR DELETE
  TO authenticated
  USING (true);

-- ============================================
-- 4. FIX FUNCTION SEARCH PATHS
-- ============================================

-- Fix generate_order_number function
DROP FUNCTION IF EXISTS generate_order_number();
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  RETURN 'ORD-' || to_char(now(), 'YYYYMMDD') || '-' || 
    lpad(floor(random() * 10000)::text, 4, '0');
END;
$$;

-- Fix update_updated_at_column function
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Fix set_order_number function
DROP FUNCTION IF EXISTS set_order_number() CASCADE;
CREATE OR REPLACE FUNCTION set_order_number()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  IF NEW.order_number IS NULL THEN
    NEW.order_number = generate_order_number();
  END IF;
  RETURN NEW;
END;
$$;

-- Recreate triggers for updated_at
CREATE TRIGGER update_customers_updated_at
  BEFORE UPDATE ON customers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Recreate trigger for order_number
CREATE TRIGGER set_order_number_trigger
  BEFORE INSERT ON orders
  FOR EACH ROW
  EXECUTE FUNCTION set_order_number();
