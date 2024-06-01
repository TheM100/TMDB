// Home.js
import Hero from "./components/Hero";
import Carrucel from "./components/carrucel";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen overflow-y-auto mt-16">
      <Hero/>
      <Carrucel/>
      <Carrucel/>
      
      
    </main>
  );
}
