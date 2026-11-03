import type { CampusEvent, Category } from "../types/campus-event";

export function searchEvents(events: CampusEvent[], text: string): CampusEvent[] {
  const query = text.trim().toLocaleLowerCase("tr");
  if (query === "") return events;
  return events.filter(
    (e) =>
      e.title.toLocaleLowerCase("tr").includes(query) ||
      e.category.toLocaleLowerCase("tr").includes(query) ||
      e.location.toLocaleLowerCase("tr").includes(query) ||
      e.description.toLocaleLowerCase("tr").includes(query)
  );
}

export function filterByCategory(events: CampusEvent[], category: Category | ""): CampusEvent[] {
  if (category === "") return events;
  return events.filter((e) => e.category === category);
}

export function findEventById(events: CampusEvent[], id: string): CampusEvent | undefined {
  return events.find((e) => e.id === id);
}
