const months = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
];

export function formatDate(date: string, time: string): string {
  const [year, month, day] = date.split("-").map(Number);
  return `${day} ${months[month - 1]} ${year}, ${time}`;
}
