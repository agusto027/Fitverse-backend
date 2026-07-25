# Code Citations

## License: unknown
https://github.com/Crazy-pea4/study/blob/cb2eb73beee90c3a21b0c128efc852e288c2b785/Project/thunder-react-app/template/slice/pkgJSON.js

```
Great question! Let me explain what you need to deploy with **Vercel** and **Railway**:

## 🚀 Deployment Strategy for FitVerse

```
┌─────────────────────────────────────────────────┐
│         Frontend (React + Vite)                 │
│         Deployed on VERCEL                      │
│  (http://your-app.vercel.app)                   │
└──────────────────┬──────────────────────────────┘
                   │
    ┌──────────────┼──────────────┐
    ▼              ▼              ▼
┌─────────┐  ┌─────────────────┐  ┌──────────┐
│ Backend │  │  AI Engine      │  │ Database │
│(Node.js)│  │  (Python)       │  │(MongoDB) │
│Railway  │  │  Railway        │  │Atlas/    │
└─────────┘  └─────────────────┘  └──────────┘
```

---

## 📦 What Goes Where?

### 1. **VERCEL** - Frontend Only ✅
**What to deploy:**
- Your React app from the `src/` folder
- Vite builds it into a `dist/` folder (optimized)
- Static files (CSS, JS, images)

**Deploy:**
- Go to [vercel.com](https://vercel.com)
- Connect your GitHub repo
- Select root directory: `/` (default)
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables:
  ```
  VITE_BACKEND_URL=https://fitverse-backend.railway.app
  VITE_AI_ENGINE_URL=https://fitverse-ai.railway.app
  ```

### 2. **RAILWAY** - Backend ✅
**What to deploy:**
- `backend/` folder (Node.js + Express)
- `backend/package.json` with dependencies
- Your MongoDB connection string

**Deploy:**
- Go to [railway.app](https://railway.app)
- New project → GitHub repo
- Select root directory: `backend/`
- Environment variables:
  ```
  PORT=3001
  MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fitverse
  JWT_SECRET=your-secret-key-here
  NODE_ENV=production
  ```

### 3. **RAILWAY** - AI Engine ✅
**What to deploy:**
- `ai-engine/` folder (Python + FastAPI)
- `ai-engine/requirements.txt` with dependencies
- `ai-engine/main.py` (FastAPI server)
- `final dataset.csv` (meal data)

**Deploy:**
- Go to [railway.app](https://railway.app)
- New project → GitHub repo
- Select root directory: `ai-engine/`
- Runtime: Python 3.13
- Environment variable:
  ```
  PYTHON_VERSION=3.13
  ```

---

## 🔧 Step-by-Step Deployment

### Step 1: Prepare Your Code

**In `backend/server.js`:**
```javascript
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;
```

**In `ai-engine/main.py`:**
```python
import os
PORT = int(os.getenv("PORT", 8000))
uvicorn.run("main:app", host="0.0.0.0", port=PORT)
```

**Add `.env.production` in root:**
```
VITE_BACKEND_URL=https://fitverse-backend.railway.app
VITE_AI_ENGINE_URL=https://fitverse-ai.railway.app
```

### Step 2: Deploy Backend on Railway

1. Create account on [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select your Fitverse repo
4. Add environment variables (MONGODB_URI, JWT_SECRET, PORT)
5. Railway auto-detects Node.js and installs packages
6. Your backend gets a URL like: `https://fitverse-backend-abc123.railway.app`

### Step 3: Deploy AI Engine on Railway

1. In same Railway account
2. Click "New Project" → "Deploy from GitHub"
3. Select your Fitverse repo (same one)
4. Configure:
   - **Root directory:** `ai-engine/`
   - **Python version:** 3.13
5. Railway detects `requirements.txt` and installs Python packages
6. Your AI engine gets a URL like: `https://fitverse-ai-xyz789.railway.app`

> **Important:** Make sure `final dataset.csv` is in the `ai-engine/` folder!

### Step 4: Deploy Frontend on Vercel

1. Create account on [vercel.com](https://vercel.com)
2. Click "New Project" → "Import Git Repository"
3. Select your Fitverse repo
4. Configure:
   - **Framework:** React
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Root directory:** `/` (default)
5. Add Environment Variables:
   ```
   VITE_BACKEND_URL=https://your-backend-railway-url
   VITE_AI_ENGINE_URL=https://your-ai-railway-url
   ```
6. Click Deploy!

---

## 📋 Configuration Files Needed

### For Backend (`backend/package.json`)
```json
{
  "name": "fitverse-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "dependencies": {
    "express": "^5.2.1",
    "mongoose": "^9.4.1",
    "bcryptjs": "^3.0.3",
    "jsonwebtoken": "^9.0.3",
    "cors": "^2.8.6",
    "dotenv": "^17.4.1"
  }
}
```

### For AI Engine (`ai-engine/requirements.txt`)
```
fastapi==0.135.2
uvicorn==0.31.0
numpy==1.26.4
pandas==2.1.4
scikit-learn==1.3.2
pydantic==2.5.0
python-multipart==0.0.6
```

### For Frontend (`package.json`)
```json
{
  "name": "fitverse",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.3",
    "react-icons": "^5.0.1"
  },
  "devDependencies": {
    "vite": "^5.4.1",
    "@vitejs/plugin-react": "
```


## License: unknown
https://github.com/Crazy-pea4/study/blob/cb2eb73beee90c3a21b0c128efc852e288c2b785/Project/thunder-react-app/template/slice/pkgJSON.js

```
Great question! Let me explain what you need to deploy with **Vercel** and **Railway**:

## 🚀 Deployment Strategy for FitVerse

```
┌─────────────────────────────────────────────────┐
│         Frontend (React + Vite)                 │
│         Deployed on VERCEL                      │
│  (http://your-app.vercel.app)                   │
└──────────────────┬──────────────────────────────┘
                   │
    ┌──────────────┼──────────────┐
    ▼              ▼              ▼
┌─────────┐  ┌─────────────────┐  ┌──────────┐
│ Backend │  │  AI Engine      │  │ Database │
│(Node.js)│  │  (Python)       │  │(MongoDB) │
│Railway  │  │  Railway        │  │Atlas/    │
└─────────┘  └─────────────────┘  └──────────┘
```

---

## 📦 What Goes Where?

### 1. **VERCEL** - Frontend Only ✅
**What to deploy:**
- Your React app from the `src/` folder
- Vite builds it into a `dist/` folder (optimized)
- Static files (CSS, JS, images)

**Deploy:**
- Go to [vercel.com](https://vercel.com)
- Connect your GitHub repo
- Select root directory: `/` (default)
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables:
  ```
  VITE_BACKEND_URL=https://fitverse-backend.railway.app
  VITE_AI_ENGINE_URL=https://fitverse-ai.railway.app
  ```

### 2. **RAILWAY** - Backend ✅
**What to deploy:**
- `backend/` folder (Node.js + Express)
- `backend/package.json` with dependencies
- Your MongoDB connection string

**Deploy:**
- Go to [railway.app](https://railway.app)
- New project → GitHub repo
- Select root directory: `backend/`
- Environment variables:
  ```
  PORT=3001
  MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fitverse
  JWT_SECRET=your-secret-key-here
  NODE_ENV=production
  ```

### 3. **RAILWAY** - AI Engine ✅
**What to deploy:**
- `ai-engine/` folder (Python + FastAPI)
- `ai-engine/requirements.txt` with dependencies
- `ai-engine/main.py` (FastAPI server)
- `final dataset.csv` (meal data)

**Deploy:**
- Go to [railway.app](https://railway.app)
- New project → GitHub repo
- Select root directory: `ai-engine/`
- Runtime: Python 3.13
- Environment variable:
  ```
  PYTHON_VERSION=3.13
  ```

---

## 🔧 Step-by-Step Deployment

### Step 1: Prepare Your Code

**In `backend/server.js`:**
```javascript
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;
```

**In `ai-engine/main.py`:**
```python
import os
PORT = int(os.getenv("PORT", 8000))
uvicorn.run("main:app", host="0.0.0.0", port=PORT)
```

**Add `.env.production` in root:**
```
VITE_BACKEND_URL=https://fitverse-backend.railway.app
VITE_AI_ENGINE_URL=https://fitverse-ai.railway.app
```

### Step 2: Deploy Backend on Railway

1. Create account on [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select your Fitverse repo
4. Add environment variables (MONGODB_URI, JWT_SECRET, PORT)
5. Railway auto-detects Node.js and installs packages
6. Your backend gets a URL like: `https://fitverse-backend-abc123.railway.app`

### Step 3: Deploy AI Engine on Railway

1. In same Railway account
2. Click "New Project" → "Deploy from GitHub"
3. Select your Fitverse repo (same one)
4. Configure:
   - **Root directory:** `ai-engine/`
   - **Python version:** 3.13
5. Railway detects `requirements.txt` and installs Python packages
6. Your AI engine gets a URL like: `https://fitverse-ai-xyz789.railway.app`

> **Important:** Make sure `final dataset.csv` is in the `ai-engine/` folder!

### Step 4: Deploy Frontend on Vercel

1. Create account on [vercel.com](https://vercel.com)
2. Click "New Project" → "Import Git Repository"
3. Select your Fitverse repo
4. Configure:
   - **Framework:** React
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Root directory:** `/` (default)
5. Add Environment Variables:
   ```
   VITE_BACKEND_URL=https://your-backend-railway-url
   VITE_AI_ENGINE_URL=https://your-ai-railway-url
   ```
6. Click Deploy!

---

## 📋 Configuration Files Needed

### For Backend (`backend/package.json`)
```json
{
  "name": "fitverse-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "dependencies": {
    "express": "^5.2.1",
    "mongoose": "^9.4.1",
    "bcryptjs": "^3.0.3",
    "jsonwebtoken": "^9.0.3",
    "cors": "^2.8.6",
    "dotenv": "^17.4.1"
  }
}
```

### For AI Engine (`ai-engine/requirements.txt`)
```
fastapi==0.135.2
uvicorn==0.31.0
numpy==1.26.4
pandas==2.1.4
scikit-learn==1.3.2
pydantic==2.5.0
python-multipart==0.0.6
```

### For Frontend (`package.json`)
```json
{
  "name": "fitverse",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.3",
    "react-icons": "^5.0.1"
  },
  "devDependencies": {
    "vite": "^5.4.1",
    "@vitejs/plugin-react": "
```

