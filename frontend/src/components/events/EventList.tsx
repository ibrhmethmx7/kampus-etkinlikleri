import type { CampusEvent } from "../../types/campus-event";
import EventCard from "./EventCard";

interface Props {
  events: CampusEvent[];
}

function EventList({ events }: Props) {
  if (events.length === 0) {
    return <p className="bos-mesaj">Aramana uygun etkinlik bulunamadı.</p>;
  }

  return (
    <section className="kart-listesi" aria-label="Etkinlikler">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventList;
