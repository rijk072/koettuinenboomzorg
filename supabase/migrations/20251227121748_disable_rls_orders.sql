/*
  # RLS Uitschakelen voor Orders en Order Items
  
  1. Changes
    - Schakel RLS uit voor orders tabel
    - Schakel RLS uit voor order_items tabel
    - Dit maakt het mogelijk om orders te plaatsen zonder authenticatie
  
  2. Note
    - Voor productie zou je betere RLS policies moeten implementeren
    - Voor nu moet het gewoon werken
*/

-- Disable RLS for orders
ALTER TABLE orders DISABLE ROW LEVEL SECURITY;

-- Disable RLS for order_items  
ALTER TABLE order_items DISABLE ROW LEVEL SECURITY;

-- Drop any existing policies
DROP POLICY IF EXISTS "Enable insert for all users" ON orders;
DROP POLICY IF EXISTS "Enable read for all users" ON orders;
DROP POLICY IF EXISTS "Enable insert for all users" ON order_items;
DROP POLICY IF EXISTS "Enable read for all users" ON order_items;
