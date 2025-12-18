# Axi Community Landing Page

A high-converting landing page for Axi Community - an iOS app that connects people living with chronic and rare conditions.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom glassmorphism design
- **Animations:** Framer Motion
- **Database:** Firebase Firestore (for waitlist emails)
- **Language:** TypeScript

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Firebase

Create a `.env.local` file in the root directory with your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Set Up Firestore

In your Firebase Console:
1. Create a new Firestore database
2. Set up security rules (example below)
3. The waitlist collection will be created automatically

**Example Firestore Rules:**
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /waitlist/{document} {
      // Allow reads only from server
      allow read: if false;
      // Allow writes from API
      allow write: if true;
    }
  }
}
```

### 4. Add Visual Assets

Place your images in the `public/visuals/` folder:
- `axi-character.png` - Main Axi character illustration
- `team-member-1.jpg` through `team-member-4.jpg` - Team photos
- Any additional visuals

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
axi-community/
├── public/
│   └── visuals/           # Images and visual assets
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout with navigation
│   │   ├── page.tsx       # Landing page
│   │   ├── about/         # About Us page
│   │   └── api/waitlist/  # Email collection API
│   ├── components/
│   │   ├── ui/            # Reusable UI components
│   │   ├── sections/      # Page sections
│   │   └── Navigation.tsx
│   └── lib/
│       └── firebase.ts    # Firebase configuration
├── tailwind.config.ts     # Custom theme colors
└── .env.local            # Environment variables (create this)
```

## Features

- ✨ Beautiful underwater-themed glassmorphism design
- 📱 Fully responsive (mobile-first)
- 🎬 Smooth scroll animations with Framer Motion
- 📧 Email waitlist with validation and duplicate detection
- 🌊 Animated background bubbles
- 📱 Interactive iPhone mockup with Axi chat preview

## Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended) - Zero config deployment
- **Firebase Hosting** - Use `next export` for static export
- Any platform supporting Node.js

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
- `deep-indigo`: Primary dark color
- `deep-purple`: Secondary dark color
- `accent-cyan`: Primary accent
- `soft-violet`: Secondary accent

### Content
- Update copy in section components (`src/components/sections/`)
- Modify team members in `src/app/about/page.tsx`
- Adjust waitlist form messaging in `src/components/ui/WaitlistForm.tsx`

## License

Private - Axi Community
