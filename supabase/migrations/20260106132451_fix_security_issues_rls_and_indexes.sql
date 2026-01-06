/*
  # Fix Security Issues - RLS and Unused Indexes

  ## Changes Made
  
  ### 1. Removed Unused Indexes
  Dropped the following unused indexes to reduce database overhead:
  - `idx_order_items_order_id` on table `order_items`
  - `idx_order_items_product_id` on table `order_items`
  - `idx_orders_customer_id` on table `orders`
  - `idx_orders_created_at` on table `orders`
  - `idx_orders_status` on table `orders`
  - `idx_reviews_product_id` on table `reviews`
  - `idx_contact_submissions_created_at` on table `contact_submissions`
  - `idx_contact_submissions_status` on table `contact_submissions`

  ### 2. Enabled RLS on Critical Tables
  - Enabled RLS on `orders` table (policies already exist)
  - Enabled RLS on `order_items` table (policies already exist)
  - Enabled RLS on `contact_submissions` table (new policies created)

  ### 3. Contact Submissions Security
  New RLS policies for `contact_submissions`:
  - Anonymous users can INSERT (submit forms)
  - Only authenticated users can SELECT (view submissions)
  - Only authenticated users can UPDATE (update status/notes)
  - Only authenticated users can DELETE (remove submissions)

  ## Notes
  - Existing policies on `orders` and `order_items` allow public inserts and authenticated reads/updates/deletes
  - This is appropriate for an e-commerce flow where customers can place orders without authentication
  - Admin access is controlled through authenticated role
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_order_items_order_id;
DROP INDEX IF EXISTS idx_order_items_product_id;
DROP INDEX IF EXISTS idx_orders_customer_id;
DROP INDEX IF EXISTS idx_orders_created_at;
DROP INDEX IF EXISTS idx_orders_status;
DROP INDEX IF EXISTS idx_reviews_product_id;
DROP INDEX IF EXISTS idx_contact_submissions_created_at;
DROP INDEX IF EXISTS idx_contact_submissions_status;

-- Enable RLS on orders table (policies already exist)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Enable RLS on order_items table (policies already exist)
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Enable RLS on contact_submissions table
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for contact_submissions
-- Allow anonymous users to submit contact forms
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view submissions (admin access)
CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update submissions (admin access)
CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users can delete submissions (admin access)
CREATE POLICY "Authenticated users can delete submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (true);
