import { use } from "react";
import type { Itechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnology[]>;
  handleSavedTechnology: (technology: Itechnology) => void;
}

const Technologies = ({
  technologiesPromise,
  handleSavedTechnology,
}: TechnologiesProps) => {
  const alltechnologies = use(technologiesPromise);
  return (
    <div className="col-span-3 grid grid-cols-3 gap-5">
      {alltechnologies.length === 0 && <p>No Technologies Found</p>}
      {alltechnologies.map((singleTechnology) => (
        <TechnologyCard
          key={singleTechnology.id}
          technology={singleTechnology}
          handleSavedTechnology={handleSavedTechnology}
        />
      ))}
    </div>
  );
};

export default Technologies;
