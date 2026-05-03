# Waitlist Feature Setup Guide

The waitlist form, API routes, and admin page are now implemented. Complete these remaining steps to activate the feature.

## 1. Create Supabase Table

Open your Supabase project dashboard and run this SQL in the SQL editor:

```sql
CREATE TABLE waitlist (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  source text DEFAULT 'curative-os-website',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
```

This creates the waitlist table with:
- `id`: Auto-generated UUID primary key
- `name`: Required text field
- `email`: Required, must be unique (duplicate emails return 409 error)
- `source`: Defaults to 'curative-os-website' (for tracking where signups came from)
- `created_at`: Auto-timestamp when row is created
- RLS enabled (no client-side access — all calls use service role key via API routes)

## 2. Set Environment Variables

Create `.env.local` in the project root:

```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
ADMIN_SECRET_KEY=choose-a-strong-random-secret
```

Get these from your Supabase project:
- **SUPABASE_URL**: Project Settings → API → URL
- **SUPABASE_SERVICE_ROLE_KEY**: Project Settings → API → Service Role Secret (not the anon key!)
- **ADMIN_SECRET_KEY**: Generate a strong random string (e.g., `openssl rand -base64 32`)

⚠️ **Never commit `.env.local`** — it's in `.gitignore`

## 3. Test the Implementation

### Run dev server
```bash
npm run dev
```

### Test form submission
1. Navigate to `localhost:3000`
2. Scroll to Roadmap section
3. Enter a test name and email
4. Click "Join Waitlist"
5. Verify success message appears
6. Check Supabase: Dashboard → Tables → waitlist (should show new entry)

### Test duplicate email
1. Try submitting the same email again
2. Should see error: "That email is already on the waitlist."

### Test admin page
1. Navigate to `localhost:3000/admin/waitlist`
2. Enter your `ADMIN_SECRET_KEY`
3. Click "Access"
4. Table should display all waitlist entries
5. Click "Export CSV" to download the data

## 4. Production Build Verification

```bash
npm run build
```

Should complete without errors. All static pages are generated, API routes are ready to deploy.

## Files Created

| File | Purpose |
|---|---|
| `src/lib/supabase.ts` | Server-side Supabase client with service role key |
| `src/app/api/waitlist/route.ts` | POST /api/waitlist — form submission handler |
| `src/app/api/admin/waitlist/route.ts` | GET /api/admin/waitlist?key=SECRET — admin data endpoint |
| `src/components/ui/WaitlistForm.tsx` | Client-side form component with loading/success/error states |
| `src/app/admin/waitlist/page.tsx` | Admin dashboard with secret key gate, table view, CSV export |

## Files Modified

| File | Change |
|---|---|
| `next.config.ts` | Removed `output: 'export'` to enable API routes |
| `src/components/sections/Roadmap.tsx` | Replaced mailto link with WaitlistForm component |
| `.env.example` | Added Supabase + admin secret documentation |

## API Endpoints

### `POST /api/waitlist`
**Request:**
```json
{ "name": "John Doe", "email": "john@example.com" }
```

**Responses:**
- `200 OK`: `{ "success": true, "message": "You're on the list!" }`
- `400 Bad Request`: Missing fields or invalid email
- `409 Conflict`: Email already exists on waitlist
- `500 Server Error`: Database error

### `GET /api/admin/waitlist?key=YOUR_ADMIN_SECRET_KEY`
**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "source": "curative-os-website",
      "created_at": "2026-05-03T20:30:00Z"
    }
  ]
}
```

**Responses:**
- `200 OK`: Returns all waitlist entries ordered by created_at (newest first)
- `401 Unauthorized`: Missing or incorrect admin key
- `500 Server Error`: Database error

---

**Next step:** Create the Supabase table, set your environment variables, and test the form!
