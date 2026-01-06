/*
  # Revert RLS Changes

  ## Changes Made
  
  Disables RLS on the following tables to restore original functionality:
  - `contact_submissions` - Allow public form submissions without authentication
  - `orders` - Allow public order creation without authentication
  - `order_items` - Allow public order items creation without authentication

  ## Notes
  - This restores the original behavior where forms and orders work without authentication
  - Admin panel access is still controlled through application-level authentication
*/

-- Disable RLS on contact_submissions to allow public form submissions
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Disable RLS on orders to allow public order creation
ALTER TABLE orders DISABLE ROW LEVEL SECURITY;

-- Disable RLS on order_items to allow public order items creation
ALTER TABLE order_items DISABLE ROW LEVEL SECURITY;
