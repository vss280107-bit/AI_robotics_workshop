# AI & Robotics Summer Workshop

A full-stack ed-tech landing page for an AI & Robotics Summer Workshop for kids aged 8–14.

## Project Structure

```
workshop/
├── frontend/          # React + Vite + Tailwind CSS
└── backend/           # Node.js + Express.js + MongoDB (optional)
```

---

## Quick Start

### Backend

```bash
cd backend
npm install
# Edit .env as needed (see Environment Variables below)
npm run dev     # dev (nodemon)
# OR
npm start       # production
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

---

## Environment Variables

### Backend (`backend/.env`)

| Variable       | Default                      | Description                   |
|----------------|------------------------------|-------------------------------|
| `PORT`         | `5000`                       | Server port                   |
| `FRONTEND_URL` | `http://localhost:5173`      | CORS allowed origin           |
| `MONGO_URI`    | *(optional)*                 | MongoDB connection string      |

If `MONGO_URI` is not set, the app runs in **in-memory mode** (enquiries stored in RAM, reset on server restart).

### Frontend (`frontend/.env`)

| Variable        | Default                   | Description        |
|-----------------|---------------------------|--------------------|
| `VITE_API_URL`  | `http://localhost:5000`   | Backend API URL    |

---

## API Endpoints

### POST `/api/enquiry`

Submit a registration enquiry.

**Request body:**
```json
{
  "name": "Arjun Sharma",
  "email": "parent@email.com",
  "phone": "9876543210"
}
```

**Success (200):**
```json
{
  "success": true,
  "message": "Enquiry submitted successfully!"
}
```

**Error (400):**
```json
{
  "success": false,
  "message": "All fields are required"
}
```

### GET `/api/enquiries`

List all submitted enquiries (admin utility).

---

## Deployment

### Frontend → Vercel

1. Push `frontend/` to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. Set **Root Directory** to `frontend`
4. Add environment variable: `VITE_API_URL=https://your-backend.onrender.com`
5. Deploy

### Backend → Render

1. Push `backend/` to GitHub
2. Create **Web Service** on [render.com](https://render.com)
3. Set **Root Directory** to `backend`
4. Start command: `npm start`
5. Add environment variables:
   - `PORT=5000`
   - `FRONTEND_URL=https://your-frontend.vercel.app`
   - `MONGO_URI=mongodb+srv://...` *(if using MongoDB)*
6. Deploy

---

## Tech Stack

| Layer     | Tech                                          |
|-----------|-----------------------------------------------|
| Frontend  | React 18, Vite, Tailwind CSS, Framer Motion   |
| Forms     | React Hook Form, Axios                        |
| Toasts    | react-hot-toast                               |
| Backend   | Node.js, Express.js, CORS                     |
| Database  | MongoDB + Mongoose (optional)                 |

---

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth Framer Motion animations
- ✅ Form validation with React Hook Form
- ✅ Toast notifications (success + error)
- ✅ Loading state on submit
- ✅ FAQ accordion with animated open/close
- ✅ CORS-configured Express API
- ✅ MongoDB integration (optional, graceful fallback)
- ✅ Deployment-ready (Vercel + Render)
