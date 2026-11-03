import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface Props {
  event: CampusEvent;
}

function EventDetail({ event }: Props) {
  return (
    <article className="detay">
      <section className="kunye">
        <h3>Etkinlik Künyesi</h3>
        <dl>
          <dt>Tarih</dt>
          <dd>{formatDate(event.date, event.time)}</dd>
          <dt>Yer</dt>
          <dd>{event.location}</dd>
          <dt>Kategori</dt>
          <dd>{event.category}</dd>
          <dt>Kontenjan</dt>
          <dd>{event.capacity} kişi</dd>
        </dl>
      </section>

      <h3>Açıklama</h3>
      <p>{event.description}</p>

      <div className="buton-grubu">
        <Link className="buton" to="/events">
          ← Listeye dön
        </Link>
        <Link className="buton" to={`/admin/${event.id}/edit`}>
          Bu etkinliği güncelle
        </Link>
      </div>
    </article>
  );
}

export default EventDetail;
