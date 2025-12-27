/*
  # Final Fix voor Contact Submissions RLS
  
  1. Probleem
    - Policies zijn te restrictief
    - Frontend kan geen data inserten
  
  2. Oplossing
    - Gebruik 'public' role in plaats van 'anon' voor INSERT
    - Dit staat zowel authenticated als anonymous users toe
  
  3. Changes
    - Drop alle existing policies
    - Create nieuwe policy met public role voor INSERT
    - Behoud authenticated policies voor SELECT/UPDATE/DELETE
*/

-- Drop ALL existing policies
DROP POLICY IF EXISTS "Allow anonymous form submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated form submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view all submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can delete submissions" ON contact_submissions;

-- Create new INSERT policy for public (includes both anon and authenticated)
CREATE POLICY "Public can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Authenticated users can view all submissions
CREATE POLICY "Authenticated can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated users can update submissions  
CREATE POLICY "Authenticated can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Authenticated users can delete submissions
CREATE POLICY "Authenticated can delete submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (true);
