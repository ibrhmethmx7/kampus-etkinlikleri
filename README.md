# Kampüs Etkinlikleri

Fakültedeki seminer, atölye, söyleşi ve yarışmaları listeleyen React + TypeScript uygulaması. Sprint 6 ve vize teslimi.

**Canlı adres:** https://ibrahimethemkaravelioglu-frontend.vercel.app

İbrahim Ethem Karavelioğlu · 2626512001

## Kurulum

```bash
cd frontend
npm install
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
