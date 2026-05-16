import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/saited/Nav";
import { Hero } from "../components/saited/Hero";
import { Countdown } from "../components/saited/Countdown";
import { About } from "../components/saited/About";
import { Events } from "../components/saited/Events";
import { Register } from "../components/saited/Register";
import { PastEditions } from "../components/saited/PastEditions";
import { Footer } from "../components/saited/Footer";
import { Chatbot } from "../components/saited/Chatbot";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#05060f] text-white">
      <Nav />
      <Hero />
      <Countdown />
      <About />
      <Events />
      <Register />
      <PastEditions />
      <Footer />
      <Chatbot />
    </main>
  );
}
