# SiteSage Setup Guide

## 🚀 Server Status
✅ **Server is running on port 5000**
✅ **Frontend and backend are both operational**

## 🔧 Environment Configuration

### OpenAI API Setup (Optional)
The application works in **demo mode** by default, but for AI-powered website generation:

1. **Get an OpenAI API Key:**
   - Go to https://platform.openai.com/api-keys
   - Create a new API key

2. **Update Environment Variables:**
   - Open `.env` file in the root directory
   - Replace `your_openai_api_key_here` with your actual API key:
   ```
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

3. **Restart the server:**
   ```bash
   npm run dev
   ```

## 🌐 Access the Application
- **Main Application:** http://localhost:5000
- **Website Generator:** Available in the main interface

## 🎯 How It Works

### Demo Mode (Current)
- ✅ Generates beautiful demo websites with your specifications
- ✅ Uses your chosen colors, navigation, and content
- ✅ Includes responsive design and modern styling
- ✅ Perfect for testing and prototyping

### AI Mode (With OpenAI API Key)
- 🤖 Uses GPT-4 to generate custom websites
- 🎨 More creative and varied designs
- 📝 Better content generation based on descriptions

## 🔧 Troubleshooting

### If website generation fails:
1. Check the browser console for errors
2. Verify the server is running on port 5000
3. The app automatically falls back to demo mode if API fails

### To restart the server:
```bash
# Stop current process
pkill -f "tsx server/index.ts"

# Start again
cd /path/to/SiteSage
npm run dev
```

## 📁 Project Structure
- `client/` - React frontend
- `server/` - Express.js backend
- `shared/` - Shared types and schemas
- `.env` - Environment configuration
