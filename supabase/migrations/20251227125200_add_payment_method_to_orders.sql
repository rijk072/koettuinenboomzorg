/*
  # Add Payment Method to Orders
  
  1. New Columns
    - `payment_method` (text, nullable) - Options: 'bij_afhalen', 'online'
  
  2. Changes
    - Add payment_method column to orders table
    - Set default to 'bij_afhalen' for pickup orders
  
  3. Reasoning
    - Needed to track how customers want to pay
    - 'bij_afhalen' = Pay on pickup (cash/pin)
    - 'online' = Pay online (iDEAL/creditcard)
*/

-- Add payment_method column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'orders' AND column_name = 'payment_method'
  ) THEN
    ALTER TABLE orders ADD COLUMN payment_method text;
  END IF;
END $$;
