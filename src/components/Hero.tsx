import Banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="relative mx-auto grid max-w-[1600px] items-center gap-16 px-2 py-20 md:px-4 lg:grid-cols-2 lg:gap-40 lg:py-28">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Build Your Ideal
          <br />
          <span className="bg-gradient-to-r from-[#7C3AED] via-[#D81B7E] to-[#FF5722] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#475569] sm:text-lg lg:mx-0">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
          <button className="rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#D81B7E] to-[#FF5722] px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
            Explore Technologies
          </button>

          <button className="rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-sm transition duration-300 hover:border-purple-300 hover:text-purple-600">
            Learn More
          </button>
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end">
        <div className="absolute inset-0 mx-auto max-w-md rounded-full bg-gradient-to-r from-[#7C3AED]/20 via-[#D81B7E]/20 to-[#FF5722]/20 blur-3xl" />

        <div className="relative w-full max-w-xl p-4">
          <img
            src={Banner}
            alt="Development stack"
            className="h-auto w-full object-contain transition duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
