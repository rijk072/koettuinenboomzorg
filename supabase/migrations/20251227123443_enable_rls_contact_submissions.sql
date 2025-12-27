/*
  # Enable RLS for Contact Submissions
  
  1. Changes
    - Enable RLS on contact_submissions table
    - Add policy to allow public to insert (submit forms)
    - Add policy to allow authenticated users to view all submissions (for admin)
    - Add policies for update and delete (authenticated only)
  
  2. Security
    - Public can submit contact forms (anonymous)
    - Only authenticated users can view/manage submissions
    - This fixes the "RLS Disabled in Public" security warning
*/

-- Enable RLS on contact_submissions
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public (everyone, including anonymous) to submit contact forms
CREATE POLICY "public_can_submit_contact_forms"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users to view all contact submissions (for admin panel)
CREATE POLICY "authenticated_can_view_all_contact_submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update contact submissions (for admin panel)
CREATE POLICY "authenticated_can_update_contact_submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete contact submissions (for admin panel)
CREATE POLICY "authenticated_can_delete_contact_submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (true);
