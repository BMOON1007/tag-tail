# Tag-Tails

QR pet-tag platform for Tag-Tails Ltd (UK).

## Stack

- Frontend: Next.js (`frontend/`)
- Backend: Laravel (`backend/`)

## Run locally

```bash
cd backend
copy .env.example .env
php artisan migrate
php artisan db:seed
php artisan serve
```

```bash
cd frontend
copy .env.example .env.local
npm install
npm run dev
```

Site: http://localhost:3000  
API: http://localhost:8000

## Environment

Set `API_URL` on the frontend to the Laravel API URL.  
Set `FRONTEND_URL` on the backend to the website URL.

For staging or production, use MySQL or Postgres and a real mail service.
