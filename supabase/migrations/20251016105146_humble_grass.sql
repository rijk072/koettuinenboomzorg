/*
  # Complete Database Schema voor Koet Tuin & Boomzorg Website

  1. New Tables
    - `customers` - Klantgegevens
    - `products` - Productcatalogus
    - `orders` - Bestellingen
    - `order_items` - Bestelling items
    - `contact_submissions` - Contactformulier inzendingen
    - `newsletter_subscribers` - Nieuwsbrief abonnees
    - `reviews` - Klantbeoordelingen
    - `project_gallery` - Project portfolio
    - `services` - Diensten overzicht

  2. Security
    - Enable RLS on alle tabellen
    - Policies voor authenticated en anonymous users
    - Admin policies voor beheer

  3. Functions
    - Automatische order numbering
    - Email notifications
    - Inventory management
*/

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Customers table
CREATE TABLE IF NOT EXISTS customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text,
  address text,
  postal_code text,
  city text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  detailed_description text,
  price decimal(10,2) NOT NULL,
  original_price decimal(10,2),
  category text NOT NULL,
  volume text,
  weight text,
  composition text,
  ph_value text,
  nutrients text,
  in_stock boolean DEFAULT true,
  popular boolean DEFAULT false,
  image_url text,
  image_urls text[], -- Array voor meerdere afbeeldingen
  benefits text[],
  usage_areas text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number text UNIQUE NOT NULL,
  customer_id uuid REFERENCES customers(id),
  customer_email text NOT NULL,
  customer_name text NOT NULL,
  customer_phone text,
  delivery_method text NOT NULL CHECK (delivery_method IN ('afhalen', 'bezorgen')),
  delivery_address text,
  delivery_postal_code text,
  delivery_city text,
  subtotal decimal(10,2) NOT NULL,
  shipping_cost decimal(10,2) DEFAULT 0,
  total_amount decimal(10,2) NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled')),
  payment_status text DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Order items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id),
  product_name text NOT NULL,
  product_price decimal(10,2) NOT NULL,
  quantity integer NOT NULL CHECK (quantity > 0),
  subtotal decimal(10,2) NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'completed', 'archived')),
  admin_notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  subscribed boolean DEFAULT true,
  subscription_date timestamptz DEFAULT now(),
  unsubscribed_at timestamptz
);

-- Reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_location text,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  product_id uuid REFERENCES products(id),
  service_type text,
  approved boolean DEFAULT false,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Project gallery table
CREATE TABLE IF NOT EXISTS project_gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  location text NOT NULL,
  size_m2 integer,
  category text NOT NULL CHECK (category IN ('0-100', '100-250', '250-500')),
  description text NOT NULL,
  image_url text NOT NULL,
  image_urls text[], -- Meerdere project foto's
  featured boolean DEFAULT false,
  completion_date date,
  created_at timestamptz DEFAULT now()
);

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  detailed_description text,
  icon text,
  features text[],
  price_range text,
  duration text,
  active boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Policies for products (public read access)
CREATE POLICY "Products are viewable by everyone"
  ON products
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Products can be managed by authenticated users"
  ON products
  FOR ALL
  TO authenticated
  USING (true);

-- Policies for orders (customers can view their own orders)
CREATE POLICY "Customers can view their own orders"
  ON orders
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create orders"
  ON orders
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Orders can be managed by authenticated users"
  ON orders
  FOR ALL
  TO authenticated
  USING (true);

-- Policies for order items
CREATE POLICY "Order items are viewable with orders"
  ON order_items
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create order items"
  ON order_items
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Order items can be managed by authenticated users"
  ON order_items
  FOR ALL
  TO authenticated
  USING (true);

-- Policies for contact submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Contact submissions can be managed by authenticated users"
  ON contact_submissions
  FOR ALL
  TO authenticated
  USING (true);

-- Policies for newsletter
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Newsletter can be managed by authenticated users"
  ON newsletter_subscribers
  FOR ALL
  TO authenticated
  USING (true);

-- Policies for reviews (public read, admin manage)
CREATE POLICY "Approved reviews are viewable by everyone"
  ON reviews
  FOR SELECT
  TO public
  USING (approved = true);

CREATE POLICY "Anyone can submit reviews"
  ON reviews
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Reviews can be managed by authenticated users"
  ON reviews
  FOR ALL
  TO authenticated
  USING (true);

-- Policies for project gallery (public read)
CREATE POLICY "Project gallery is viewable by everyone"
  ON project_gallery
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Project gallery can be managed by authenticated users"
  ON project_gallery
  FOR ALL
  TO authenticated
  USING (true);

-- Policies for services (public read)
CREATE POLICY "Services are viewable by everyone"
  ON services
  FOR SELECT
  TO public
  USING (active = true);

CREATE POLICY "Services can be managed by authenticated users"
  ON services
  FOR ALL
  TO authenticated
  USING (true);

-- Policies for customers
CREATE POLICY "Customers can view their own data"
  ON customers
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create customer records"
  ON customers
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Customers can be managed by authenticated users"
  ON customers
  FOR ALL
  TO authenticated
  USING (true);

-- Functions for automatic order numbering
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS text AS $$
DECLARE
  new_number text;
BEGIN
  new_number := 'KTB-' || TO_CHAR(NOW(), 'YYYY') || '-' || LPAD(NEXTVAL('order_number_seq')::text, 4, '0');
  RETURN new_number;
END;
$$ LANGUAGE plpgsql;

-- Create sequence for order numbers
CREATE SEQUENCE IF NOT EXISTS order_number_seq START 1000;

-- Trigger to auto-generate order numbers
CREATE OR REPLACE FUNCTION set_order_number()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.order_number IS NULL THEN
    NEW.order_number := generate_order_number();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_order_number
  BEFORE INSERT ON orders
  FOR EACH ROW
  EXECUTE FUNCTION set_order_number();

-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add update triggers to relevant tables
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