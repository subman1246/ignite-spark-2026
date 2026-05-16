import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "../../components/saited/EventPage";
import { EVENT_DETAILS } from "../../data/eventDetails";

export const Route = createFileRoute("/events/start-up-park")({
  component: () => <EventPage event={EVENT_DETAILS["start-up-park"]} />,
});
