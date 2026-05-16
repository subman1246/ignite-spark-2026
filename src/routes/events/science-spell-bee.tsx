import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "../../components/saited/EventPage";
import { EVENT_DETAILS } from "../../data/eventDetails";

export const Route = createFileRoute("/events/science-spell-bee")({
  component: () => <EventPage event={EVENT_DETAILS["science-spell-bee"]} />,
});
