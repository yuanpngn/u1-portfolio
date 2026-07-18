# Firebase Setup Guide for Commonplace Section

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter a project name (e.g., "portfolio-commonplace")
4. Follow the setup wizard (Google Analytics is optional)

## Step 2: Enable Authentication

1. In your Firebase project, go to **Build** > **Authentication**
2. Click "Get started"
3. Go to **Sign-in method** tab
4. Enable **Email/Password** authentication
5. Click "Save"

## Step 3: Create Firestore Database

1. Go to **Build** > **Firestore Database**
2. Click "Create database"
3. Choose "Start in production mode" (we'll set rules next)
4. Select your preferred location (choose closest to your users)
5. Click "Enable"

## Step 4: Set Firestore Security Rules

1. In Firestore Database, go to **Rules** tab
2. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Entries collection
    match /entries/{entryId} {
      // Anyone can read entries
      allow read: if true;
      
      // Only authenticated users can write
      allow create, update, delete: if request.auth != null;
    }
  }
}
```

3. Click "Publish"

## Step 5: Get Your Firebase Configuration

1. Go to **Project settings** (gear icon) > **General**
2. Scroll down to "Your apps"
3. Click the web icon `</>`
4. Register your app with a nickname (e.g., "Portfolio")
5. Copy the `firebaseConfig` object

## Step 6: Configure Your Project

### Option A: Using Environment Variables (Recommended)

1. Create a `.env` file in your project root:
```bash
cp .env.example .env
```

2. Open `.env` and paste your Firebase config values:
```
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

3. Add `.env` to your `.gitignore`:
```bash
echo ".env" >> .gitignore
```

### Option B: Direct Configuration

1. Open `src/firebase/config.js`
2. Replace the placeholder values with your actual Firebase config:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

## Step 7: Create Your Admin Account

1. Go to **Authentication** > **Users**
2. Click "Add user"
3. Enter your email and a secure password
4. Click "Add user"
5. **Important:** Save these credentials - you'll use them to log in to your portfolio

## Step 8: Test Your Setup

1. Start your development server:
```bash
npm run dev
```

2. Navigate to the Commonplace section
3. Click "Admin Access"
4. Log in with the email and password you created in Step 7
5. Try creating, editing, and deleting entries

## Step 9: Deploy

When deploying to production (Vercel, Netlify, etc.):

1. Add your environment variables to your hosting platform:
   - For **Vercel**: Settings > Environment Variables
   - For **Netlify**: Site settings > Build & deploy > Environment

2. Add the same variables from your `.env` file

## Firestore Data Structure

Your entries will be stored in Firestore with this structure:

```
entries (collection)
  └── [auto-generated-id] (document)
      ├── title: string
      ├── content: string
      ├── category: string
      ├── source: string (optional)
      ├── tags: array
      ├── createdAt: timestamp
      └── updatedAt: timestamp
```

## Security Notes

- ✅ Entries are publicly readable (visitors can see them)
- ✅ Only authenticated users (you) can create/edit/delete
- ✅ Email/password stored securely in Firebase Auth
- ✅ Firebase API key is safe to expose (it's restricted by domain)
- ⚠️ Don't commit `.env` to git
- ⚠️ Set up Firebase domain restrictions in production

## Troubleshooting

### "Firebase: Error (auth/invalid-api-key)"
- Check that your API key is correct in `.env` or `config.js`

### "Missing or insufficient permissions"
- Verify your Firestore security rules are published
- Make sure you're logged in with the admin account

### Environment variables not working
- Restart your dev server after creating `.env`
- Make sure variables start with `VITE_` prefix
- Check for typos in variable names

### Can't log in
- Verify the user exists in Firebase Authentication > Users
- Check that Email/Password provider is enabled
- Try resetting the password in Firebase Console
