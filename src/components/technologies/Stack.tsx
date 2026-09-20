import { FiTrash2, FiX } from "react-icons/fi";
import type { Itechnology } from "../types/technology";

type StackProps = {
  technologies: Itechnology[];
  handleRemoveTechnology: (id:string) => void
  handleClearAll: () => void
};

const Stack = ({ technologies,handleClearAll,handleRemoveTechnology }: StackProps) => {
  return (
    <aside id="reading-list" className="w-full">
      <div className="flex flex-col gap-5 rounded-lg border border-accent bg-surface p-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-coral">
              Your Stack
            </p>

            <p className="mt-1 text-xs text-muted">
              {technologies.length === 1
                ? "technology"
                : "No technologies selected yet."}
            </p>
          </div>

          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-xs font-bold">
            {technologies.length}
          </span>
        </div>

        {technologies.length === 0 ? (
          <div className="py-16 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-dashed border-sage-line text-xl text-sage-text">
              +
            </div>

            <p className="mt-2 text-xs leading-5 text-muted">
              Your stack is empty.
            </p>
          </div>
        ) : (
          <div className="my-7 grid gap-3">
            {technologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg bg-white p-3"
              >
                <img
                  className="h-12 w-12 rounded object-cover"
                  src={technology.icon}
                  alt=""
                />

                <div className="min-w-0">
                  <strong className="block truncate text-xs">
                    {technology.name}
                  </strong>

                  <span className="text-xs text-muted">
                    {technology.category}
                  </span>
                </div>

                <button
                  type="button"
				  onClick={() => handleRemoveTechnology(technology.id)}
                  className="ml-auto text-nav-icon hover:text-coral"
                  aria-label={`Remove ${technology.icon}`}
                >
                  <FiX />
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          disabled={technologies.length === 0}
		  onClick={handleClearAll}
          className="flex min-h-9 w-full items-center justify-center gap-2 rounded-lg border border-danger-line text-xs font-bold text-danger disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FiTrash2 />
          Clear list
        </button>
      </div>
    </aside>
  );
};

export default Stack;
