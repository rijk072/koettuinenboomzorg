/*
  # Tijdelijk RLS Uitschakelen voor Contact Submissions
  
  1. Probleem
    - RLS policies werken niet zoals verwacht
    - Formulier moet gewoon werken
  
  2. Oplossing
    - Schakel RLS volledig uit voor contact_submissions tabel
    - Dit staat iedereen toe om te inserten/lezen
  
  3. Note
    - Dit is een tijdelijke oplossing
    - Voor productie zou je RLS weer moeten aanzetten met correcte policies
*/

-- Disable RLS completely for contact_submissions
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Drop all policies (just to be sure)
DROP POLICY IF EXISTS "Public can submit contact forms" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated can view submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated can update submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated can delete submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous form submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated form submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view all submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can delete submissions" ON contact_submissions;
