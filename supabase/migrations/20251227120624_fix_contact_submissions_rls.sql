/*
  # Fix RLS Policy voor Contact Submissions
  
  1. Probleem
    - Bestaande INSERT policy werkt niet correct met Supabase client
    - Formulier kan niet worden verzonden door anonymous users
  
  2. Oplossing
    - Drop bestaande policies
    - Maak nieuwe policies met correcte configuratie
    - Sta INSERT toe voor iedereen (anon role)
    - Sta SELECT toe voor authenticated users (admins)
  
  3. Nieuwe Policies
    - INSERT: Iedereen kan formulieren indienen
    - SELECT: Alleen authenticated users kunnen submissions zien
    - UPDATE: Alleen authenticated users kunnen status updaten
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON contact_submissions;
DROP POLICY IF EXISTS "Contact submissions can be managed by authenticated users" ON contact_submissions;

-- Create new policies with correct configuration
CREATE POLICY "Allow anonymous form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated form submissions"
  ON contact_submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (true);
