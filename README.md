# LifeStyle Tracker (After-Patient Care)

A full-stack web app designed to help patients follow after-care plans, log daily wellness check-ins, and let doctors review progress and provide guidance.

# Features
- Patient dashboard with today's after-care checklist
- Doctor portal to create/update care plans
- Daily wellness survey (pain, mobility, red flags) with simple risk scoring
- Role-based access (patient/doctor)
- Optional: appointments (telehealth link)

# Tech Stack
- Frontend: React + Vite, Bootstrap
- Backend: Node.js + Express
- Database: PostgreSQL (SQL Scripts + seed data)
- Auth: JWT (JSON Web Tokens)

# Structure
lifestyle-tracker/
├─ client/                # React (Vite) frontend
├─ server/                # Express backend
│  └─ src/
│     ├─ routes/          # route definitions
│     ├─ controllers/     # request handlers
│     ├─ models/          # DB queries (pg/knex/sequelize—your choice)
│     ├─ middleware/      # auth, error handling
│     └─ app.js           # Express app bootstrap
├─ database/
│  ├─ schema.sql          # CREATE TABLE statements
│  └─ seed.sql            # sample data for demos
├─ docs/                  # ERD/UML/pitch notes (optional)
├─ README.md
└─ .gitignore

# Prerequisites 
- Node.js 18+
- PostgreSQL 14+ (local or cloud, e.g., Supabase/Neon/Render)
- Git

# Environment Variables 
Create server/.env
# App
PORT=5000
JWT_SECRET=change_me_for_real

# Postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=lifestyle_tracker
DB_USER=postgres
DB_PASSWORD=postgres
DB_SSL=false

If you deploy Postgres in the cloud, set DB_SSL=true (or use a connection string and read it in your code).

# Getting Started 
1) Clone & Install
git clone https://github.com/swleung1/LifeStyle-Tracker-After-Care-Platform.git
cd lifestyle-tracker-after-care-platform

# Frontend
cd client
npm install

# Backend
cd ../server
npm install

2) Create the database
Make a database named lifestyle_tracker in Postgres, then run the schema and seed:
# From repo root
psql -h localhost -U postgres -d postgres -c "CREATE DATABASE lifestyle_tracker;"

# Apply schema & seed
psql -h localhost -U postgres -d lifestyle_tracker -f database/schema.sql
psql -h localhost -U postgres -d lifestyle_tracker -f database/seed.sql

If psql isn’t on your PATH, use a GUI like Beekeeper Studio or TablePlus to run the SQL files.

3) Run the backend (Express)
cd server
npm run dev     # uses nodemon, serves on http://localhost:5000

4) Run the frontend (React)
cd ../client
npm run dev     # Vite dev server on http://localhost:5173 (or shown in terminal)

5) Test the connection
With the backend running, try:
curl http://localhost:5000/api/health
# => { "status": "API running ✅" }

# Example API Routes (MVP)
- Auth
    - POST /api/auth/register → { name, email, password, role }
    - POST /api/auth/login → { email, password } → { accessToken }
- Care Plans & Instructions
    - GET /api/patient/care-plan (patient only)
    - POST /api/doctor/care-plan (doctor only)
    - POST /api/doctor/care-plan/:id/instructions (doctor only)
- Surveys
    - POST /api/patient/surveys → submit daily check-in
    - GET /api/doctor/patients/:patientId/surveys (doctor only)
- Appointments (optional)
    - POST /api/doctor/appointments
    - GET /api/patient/appointments
Protect routes with JWT middleware. Scope results by role (doctor vs patient).

# Database (Suggested Schema)
Tables you’ll likely have in schema.sql:
- users (id, name, email, password_hash, role)
- patients (id, user_id, primary_doctor_id, condition)
- doctor_patient (doctor_id, patient_id, UNIQUE)
- care_plans (id, patient_id, title, active, created_at, updated_at)
- instructions (id, care_plan_id, title, description, urgency_level, order_index)
- surveys (id, patient_id, submitted_at, risk_level, responses JSONB)
- appointments (id, doctor_id, patient_id, start_at, link, notes)
Add helpful indexes in your SQL (e.g., surveys by patient/date).

# Scripts
client/package.json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}

server/package.json
{
  "type": "module",
  "scripts": {
    "dev": "nodemon src/app.js",
    "start": "node src/app.js"
  },
  "dependencies": {
    "bcryptjs": "^2",
    "cors": "^2",
    "dotenv": "^16",
    "express": "^4",
    "jsonwebtoken": "^9",
    "pg": "^8"        // or use knex/sequelize/prisma
  },
  "devDependencies": {
    "nodemon": "^3"
  }
}

Development Workflow
Branches:
- main (stable) → dev (integration) → feature branches (e.g., feature/auth-backend, feature/patient-dashboard)
Kanban columns: 
- Backlog → To Do → In Progress → Review → Done
One card = one PR. Small, reviewable chunks. Merge to dev daily; promote to main when demo-ready.

Security Basics (MVP)
- Hash passwords with bcrypt
- JWT with short expiry (e.g., 60–120 min)
- Validate inputs on server (e.g., zod / express-validator)
- Use parameterized queries to avoid SQL injection
- Keep secrets in .env (never commit it)

Deployment (when ready)
- Backend + Postgres: Render/Railway/Fly.io (set env vars)
- Frontend: Netlify/Vercel (set VITE_API_BASE_URL)
- Force HTTPS and CORS allow-list your frontend origin.

Troubleshooting
- Cannot connect to DB: check .env, network, and whether DB is running.
- CORS errors: add your Vite dev URL (e.g., http://localhost:5173) to server CORS config.
- JWT “invalid signature”: mismatch between server’s JWT_SECRET locally vs deployed.