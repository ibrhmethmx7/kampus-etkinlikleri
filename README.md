# Kampüs Etkinlikleri

Fakültedeki seminer, atölye, söyleşi ve yarışmaları listeleyen React + TypeScript uygulaması. Sprint 7 ile yanına Express REST API eklendi (`backend/`).

**Canlı adres:** https://ibrahimethemkaravelioglu-frontend.vercel.app

İbrahim Ethem Karavelioğlu · 2626512001

## Kurulum

Frontend (localhost:5173):

```bash
cd frontend
npm install
npm run dev
```

Backend (localhost:3000), ayrıntılar `backend/README.md` içinde:

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## Route listesi

| Adres | Sayfa |
| --- | --- |
| `/` | HomePage |
| `/events` | EventsPage |
| `/events/:id` | EventDetailPage |
| `/login` | LoginPage |
| `/register` | RegisterPage |
| `/forgot-password` | ForgotPasswordPage |
| `/admin` | AdminPage |
| `/admin/new` | AddEventPage |
| `/admin/:id/edit` | EditEventPage |
| `*` | NotFoundPage |

## Kullanılanlar

- React, TypeScript, Vite
- React Router (`BrowserRouter`, `Routes`, `NavLink`, `useParams`, `useNavigate`)
- Context (`EventsContext`, `useEvents`)
- Controlled form ve doğrulama (`validateEvent`)
