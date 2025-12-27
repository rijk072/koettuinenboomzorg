/*
  # Fix Contact Submissions RLS for Anonymous Users
  
  1. Changes
    - Drop all existing policies on contact_submissions
    - Create NEW policy that allows anonymous (anon) users to INSERT
    - Create policy for authenticated users to manage submissions
  
  2. Security
    - Anonymous users can ONLY insert (submit forms)
    - Authenticated users can view/update/delete all submissions
    - This fixes the "new row violates row-level security policy" error
  
  3. Technical Details
    - Using 'anon' role instead of 'public' role
    - Simplified WITH CHECK to ensure it always passes
*/

-- Drop all existing policies first
DROP POLICY IF EXISTS "public_can_submit_contact_forms" ON contact_submissions;
DROP POLICY IF EXISTS "authenticated_can_view_all_contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "authenticated_can_update_contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "authenticated_can_delete_contact_submissions" ON contact_submissions;

-- Create NEW policy for anonymous INSERT (this is the critical fix)
CREATE POLICY "anon_users_can_insert_contact_forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to SELECT all submissions
CREATE POLICY "authenticated_users_can_select_submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to UPDATE all submissions
CREATE POLICY "authenticated_users_can_update_submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to DELETE all submissions
CREATE POLICY "authenticated_users_can_delete_submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (true);
