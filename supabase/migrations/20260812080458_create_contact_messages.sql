/*
# Create contact_messages table

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email for replies
  - `message` (text, not null) — the message body
  - `created_at` (timestamptz, default now()) — when the message was sent
  - `is_read` (boolean, default false) — whether Tarique has read the message

2. Security
- Enable RLS on `contact_messages`.
- Allow anyone (anon + authenticated) to INSERT new messages — the contact form is public.
- No SELECT/UPDATE/DELETE for anon or authenticated — only the service role (server-side) can read/manage messages.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);
