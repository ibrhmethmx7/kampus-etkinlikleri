import { Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import { formatDate } from "../utils/format-date";

function AdminPage() {
  const { events, deleteEvent } = useEvents();

  function handleDelete(id: string, title: string) {
    if (window.confirm(`"${title}" silinsin mi?`)) deleteEvent(id);
  }

  return (
    <>
      <div className="sayfa-ust">
        <h2 className="bolum-baslik">Yönetim</h2>
        <Link className="buton" to="/admin/new">
          + Yeni etkinlik
        </Link>
      </div>

      {events.length === 0 ? (
        <p className="bos-mesaj">Henüz etkinlik yok.</p>
      ) : (
        <table className="tablo">
          <thead>
            <tr>
              <th>Etkinlik</th>
              <th>Tarih</th>
              <th>Kategori</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td data-baslik="Etkinlik">
                  <Link to={`/events/${event.id}`}>{event.title}</Link>
                </td>
                <td data-baslik="Tarih">{formatDate(event.date, event.time)}</td>
                <td data-baslik="Kategori">{event.category}</td>
                <td className="islemler">
                  <Link className="buton buton-kucuk" to={`/admin/${event.id}/edit`}>
                    Düzenle
                  </Link>
                  <button
                    className="buton buton-kucuk buton-sil"
                    type="button"
                    onClick={() => handleDelete(event.id, event.title)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default AdminPage;
