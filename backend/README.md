# Kampüs Etkinlikleri API

Sprint 7 backend'i. Node + Express ile yazıldı, veri şimdilik bellekte tutuluyor (sunucu yeniden başlayınca POST ile eklenenler silinir).

## Çalıştırma

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Sunucu `http://localhost:3000` adresinde açılır.

## Ortam değişkenleri

| Değişken | Açıklama | Varsayılan |
| --- | --- | --- |
| `PORT` | Sunucunun dinlediği port | `3000` |

## REST sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
| --- | --- | --- | --- | --- | --- |
| GET | `/health` | Sunucu ayakta mı | 200 | — | Bu sprint |
| GET | `/events` | Listeyi getir (`?category=` ile filtre) | 200 | — | Bu sprint |
| GET | `/events/:id` | Tek etkinlik | 200 | 404 | Bu sprint |
| POST | `/events` | Yeni etkinlik | 201 | 400 | Bu sprint |
| PATCH | `/events/:id` | Güncelle | 200 | 400, 404 | Sprint 9 |
| DELETE | `/events/:id` | Sil | 204 | 404 | Sprint 9 |

POST için `title`, `category` ve `date` zorunlu.

Bütün hatalar aynı biçimde döner:

```json
{ "error": { "message": "Event not found" } }
```

## Postman

İstekler `requests/kampus-api.json` dosyasında (Collection v2.1). Postman'de Import ile açılabilir.
