# Kampüs Etkinlikleri API

Node + Express ile yazılmış REST API. Sprint 8'den itibaren veriler MongoDB'de (Mongoose) tutuluyor; sunucu kapanıp açılınca POST ile eklenen kayıtlar kaybolmuyor.

## Çalıştırma

```bash
cd backend
npm install
cp .env.example .env    # sonra MONGODB_URI'yi kendi adresinle değiştir
npm run seed            # veritabanını 6 örnek etkinlikle doldurur
npm run dev
```

Sunucu `http://localhost:3000` adresinde açılır. Önce veritabanına bağlanır, bağlanamazsa hata yazıp kapanır.

`npm run seed` her çalıştığında koleksiyonu temizleyip 6 kaydı yeniden ekler; kaç kez çalışırsa çalışsın 6 kayıt olur.

## Ortam değişkenleri

| Değişken | Açıklama | Örnek |
| --- | --- | --- |
| `PORT` | Sunucunun dinlediği port | `3000` |
| `MONGODB_URI` | MongoDB bağlantı adresi, sonunda veritabanı adı | `mongodb://127.0.0.1:27017/kampus` |

Atlas kullanırken adres `mongodb+srv://...mongodb.net/kampus` biçimindedir. Gerçek adres (şifreyle birlikte) sadece `.env` dosyasına yazılır; `.env` GitHub'a gönderilmez.

## Klasörler

| Dosya | İşi |
| --- | --- |
| `src/server.js` | `.env`'i okur, veritabanına bağlanır, portu dinler |
| `src/app.js` | Express uygulaması, middleware'ler, route'lar, 404 ve hata yakalayıcı |
| `src/config/database.js` | MongoDB bağlantısı (`connectDatabase`) |
| `src/models/event-model.js` | Etkinlik schema'sı ve `Event` modeli |
| `src/controllers/event-controller.js` | İstekleri işler, modeli kullanır |
| `src/routes/event-routes.js` | Adres → controller eşlemesi |
| `src/data/seed-events.js` | Örnek 6 etkinlik |
| `src/seed.js` | `npm run seed` scripti |

## Schema kuralları

| Alan | Kural |
| --- | --- |
| `title` | zorunlu, trim, 3–100 karakter |
| `category` | zorunlu, sadece `Seminer`, `Atölye`, `Söyleşi`, `Yarışma` |
| `date` | zorunlu, `YYYY-AA-GG` biçiminde |
| `capacity` | sayı, 0'dan küçük olamaz, varsayılan 0 |
| `time`, `location` | trim, varsayılan boş |
| `description` | trim, en fazla 500 karakter |

`timestamps: true` sayesinde her kayıtta `createdAt` ve `updatedAt` otomatik oluşur.

## REST sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
| --- | --- | --- | --- | --- | --- |
| GET | `/health` | Sunucu ayakta mı | 200 | — | Sprint 7 |
| GET | `/events` | Listeyi getir (`?category=` ile filtre, tarihe göre sıralı) | 200 | — | Sprint 8 |
| GET | `/events/:id` | Tek etkinlik (`:id` MongoDB `_id`'si) | 200 | 404 | Sprint 8 |
| POST | `/events` | Yeni etkinlik | 201 | 400 | Sprint 8 |
| PATCH | `/events/:id` | Güncelle | 200 | 400, 404 | Sprint 9 |
| DELETE | `/events/:id` | Sil | 204 | 404 | Sprint 9 |

- Geçersiz biçimdeki id (`/events/yok`) de, biçimi doğru ama olmayan id de 404 döner.
- Schema kurallarına uymayan POST 400 döner, sunucu çökmez.
- Beklenmeyen bir hata olursa hata yakalayıcı 500 döner.

Bütün hatalar aynı biçimde döner:

```json
{ "error": { "message": "Event not found" } }
```

## Postman

İstekler `requests/kampus-api.json` dosyasında (Collection v2.1). Postman'de Import ile açılabilir.

`GET events` isteği listedeki ilk kaydın `_id`'sini `eventId` değişkenine kaydeder; `GET event (id ile)` isteği bu değişkeni kullanır. Bu yüzden istekleri sırayla çalıştırmak yeterli.
