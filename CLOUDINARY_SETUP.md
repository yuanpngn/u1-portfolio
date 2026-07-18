# Cloudinary Setup for Image Upload

## Step 1: Create a Free Cloudinary Account

1. Go to [Cloudinary Signup](https://cloudinary.com/users/register/free)
2. Sign up with your email (no credit card required)
3. Verify your email
4. Log in to your dashboard

## Step 2: Get Your Cloudinary Credentials

1. Once logged in, you'll see your **Dashboard**
2. Look for the **Product Environment Credentials** section
3. You'll see:
   - **Cloud Name** (e.g., `dxyz123abc`)
   - **API Key**
   - **API Secret**

**IMPORTANT:** Only copy the **Cloud Name** - you'll need it!

## Step 3: Create an Upload Preset

1. In the Cloudinary dashboard, click the **Settings** (⚙️) icon
2. Go to **Upload** tab (in the left sidebar)
3. Scroll down to **Upload presets**
4. Click **Add upload preset**
5. Configure:
   - **Preset name:** `portfolio_uploads` (or any name you like)
   - **Signing Mode:** Select **"Unsigned"** (important!)
   - **Folder:** Type `commonplace` (optional but recommended)
   - Leave other settings as default
6. Click **Save**

## Step 4: Update Your Code

1. Open `src/sections/Commonplace/EntryForm.jsx`
2. Find these lines near the top:
   ```javascript
   const CLOUDINARY_UPLOAD_PRESET = 'ml_default'; // You'll update this after setup
   const CLOUDINARY_CLOUD_NAME = 'YOUR_CLOUD_NAME'; // You'll update this after setup
   ```
3. Replace with your actual values:
   ```javascript
   const CLOUDINARY_UPLOAD_PRESET = 'portfolio_uploads'; // Your preset name from Step 3
   const CLOUDINARY_CLOUD_NAME = 'dxyz123abc'; // Your cloud name from Step 2
   ```

## Step 5: Test Image Upload

1. Start your dev server: `npm run dev`
2. Navigate to Commonplace section
3. Log in as admin
4. Click "Add New Entry"
5. Fill in the form and select an image
6. Click "Create Entry"
7. Your image will upload to Cloudinary and display in the entry!

## Cloudinary Free Tier Limits:

✅ **25 GB** storage
✅ **25 GB** bandwidth/month
✅ **25,000** transformations/month
✅ **500** videos (1 GB)

**More than enough for a portfolio!**

## View Your Uploads:

- Go to [Media Library](https://cloudinary.com/console/media_library)
- You'll see all uploaded images in the `commonplace` folder
- Click any image to get its URL, transformations, etc.

## Security Notes:

- ✅ Unsigned presets are safe for portfolios
- ✅ Cloud name is public (it's in image URLs)
- ✅ API Secret should never be in frontend code
- ⚠️ For production, consider adding allowed domains in Cloudinary settings

## Troubleshooting:

**"Upload preset not found"**
- Make sure the preset name matches exactly
- Verify it's set to "Unsigned"

**"Invalid cloud name"**
- Double-check your cloud name from dashboard
- No spaces or special characters

**Images not displaying**
- Check browser console for errors
- Verify the Cloudinary URL is accessible

That's it! Your image uploads now work without Firebase Storage. 🎉
