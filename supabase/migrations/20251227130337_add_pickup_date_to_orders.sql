/*
  # Add Pickup Date to Orders
  
  1. New Columns
    - `pickup_date` (date, nullable) - Gewenste afhaaldatum voor afhaalbestellingen
  
  2. Purpose
    - Hoveniers kunnen aangeven wanneer ze hun bestelling komen ophalen
    - Admin kan voorbereiden en zien welke bestellingen wanneer afgehaald worden
    - Vooral belangrijk voor bulk bestellingen (10, 20, 50, 100 zakken)
*/

-- Add pickup_date column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'orders' AND column_name = 'pickup_date'
  ) THEN
    ALTER TABLE orders ADD COLUMN pickup_date date;
  END IF;
END $$;
