import { Suspense, useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import type { Itechnology } from "./components/types/technology";
import Technologies from "./components/technologies/Technologies";
import Stack from "./components/technologies/Stack";
import { Bounce, toast, ToastContainer } from "react-toastify";

const technologiesFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const technologiesPromise = technologiesFetch();
const handleSavedTechnology = (technology: Itechnology) => {
  console.log(handleSavedTechnology,{technology});
};

function App() {
  const [saved, setSaved] = useState<Itechnology[]>([]);
  const handleSavedTechnology = (technology: Itechnology) => {
    setSaved([...saved, technology]);
  };

  const handleRemoveTechnology = (id:string) => {
    console.log({id});
  }
    const handleClearAll = () => {
    if (!saved.length) return;
    setSaved([]);
    toast.success("Your reading list is clear", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  return (
    <>
      <Nav />
      <Hero />
      <ToastContainer />
      <main>
        <section className="container mx-auto my-10">
          <div className="grid grid-cols-4 gap-5">
            <Suspense fallback={<div>Loading......</div>}>
              <Technologies
                technologiesPromise={technologiesPromise}
                handleSavedTechnology={handleSavedTechnology}
              />
            </Suspense>
            <Stack 
            technologies={saved} 
            handleClearAll={handleClearAll} 
            handleRemoveTechnology = {handleRemoveTechnology}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
