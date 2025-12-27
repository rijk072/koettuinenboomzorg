/*
  # Voeg archived status toe aan orders

  1. Wijzigingen
    - Voegt 'archived' status toe aan de orders tabel status check constraint
    - Dit maakt het mogelijk om bestellingen te archiveren voor administratieve doeleinden

  2. Security
    - Geen wijzigingen aan RLS policies
*/

-- Drop de bestaande check constraint
ALTER TABLE orders DROP CONSTRAINT IF EXISTS orders_status_check;

-- Voeg de nieuwe check constraint toe met 'archived' status
ALTER TABLE orders ADD CONSTRAINT orders_status_check 
  CHECK (status = ANY (ARRAY['pending'::text, 'confirmed'::text, 'processing'::text, 'shipped'::text, 'delivered'::text, 'cancelled'::text, 'archived'::text]));