import mongoose from "mongoose";

export async function connectDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI tanımlı değil (.env dosyasını kontrol et)");
  }

  await mongoose.connect(uri);

  // uri içinde şifre olduğu için sadece host ve veritabanı adı yazılıyor
  const { host, name } = mongoose.connection;
  const where = uri.startsWith("mongodb+srv://") ? "Atlas" : "yerel";
  console.log(`MongoDB bağlandı (${where}): ${host}/${name}`);
}
