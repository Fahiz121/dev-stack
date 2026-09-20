import { FiArrowUpRight, FiStar } from "react-icons/fi";
import type { Itechnology } from "../types/technology";

type TechnologyCardProps = {
  technology: Itechnology;
  handleSavedTechnology: (technology: Itechnology) => void;
};

const badgeColors: Record<string, string> = {
  Popular: "bg-blue-100 text-blue-600",
  Essential: "bg-red-100 text-red-600",
  Fast: "bg-orange-100 text-orange-600",
  "Top SQL": "bg-purple-100 text-purple-600",
  "Full-Stack": "bg-orange-100 text-orange-600",
  Containers: "bg-cyan-100 text-cyan-600",
  Enterprise: "bg-indigo-100 text-indigo-600",
  Lightweight: "bg-pink-100 text-pink-600",
};

const TechnologyCard = ({
  technology,
  handleSavedTechnology,
}: TechnologyCardProps) => {
  const { name, category, description, icon, rating, difficulty, badge } =
    technology;
  const selected = false;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-base-200 p-3 transition duration-300 group-hover:scale-105">
          <img
            src={icon}
            alt={`${name} icon`}
            className="h-full w-full object-contain"
          />
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            badgeColors[badge] ?? "bg-gray-100 text-gray-600"
          }`}
        >
          {badge}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="text-2xl font-bold tracking-tight">{name}</h3>

        <p className="mt-3 min-h-20 text-sm leading-6 text-base-content/60">
          {description}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/70">
          {category}
        </span>

        <span className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-600">
          <FiStar />
          {rating}
        </span>

        <span className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/70">
          {difficulty}
        </span>
      </div>

      <button
        disabled={selected}
        onClick={() => handleSavedTechnology(technology)}
        className="font-['Plus_Jakarta_Sans'] text-[12px] font-semibold mt-5 flex w-full items-center justify-center gap-1 rounded-lg bg-[#0A0F1D] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#151C2E]"
      >
        AddtoStack
        <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </article>
  );
};

export default TechnologyCard;
