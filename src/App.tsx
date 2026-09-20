import { Suspense, useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import type { Itechnology } from "./components/types/technology";
import Technologies from "./components/technologies/Technologies";
import Stack from "./components/technologies/Stack";

const technologiesFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const technologiesPromise = technologiesFetch();
const handleSavedTechnology = (technology: Itechnology) => {
  console.log(handleSavedTechnology);
};

function App() {
  const [saved, setSaved] = useState<Itechnology[]>([]);
  const handleSavedTechnology = (technology: Itechnology) => {
    setSaved([...saved, technology]);
  };
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <section className="container mx-auto my-10">
          <div className="grid grid-cols-4 gap-5">
            <Suspense fallback={<div>Loading......</div>}>
              <Technologies
                technologiesPromise={technologiesPromise}
                handleSavedTechnology={handleSavedTechnology}
              />
            </Suspense>
            <Stack technologies={saved} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
