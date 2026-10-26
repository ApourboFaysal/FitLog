import Image from "next/image";
import heroImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="mx-auto w-full max-w-1280px px-6 pt-12">
      <div
        className="grid items-center gap-8 rounded-2xl border border-[#1f232c] bg-[#12141a] 
      px-10 py-16 md:grid-cols-2 md:px-14"
      >
        <div>
          <p className="text-[11px] font-bold tracking-[0.15em] text-[#c6f600]">
            WORKOUT LIBRARY
          </p>

          <h1 className="mt-6 max-w-600px font-['Bebas_Neue'] text-6xl uppercase leading-[0.95] text-white md:text-7xl">
            Train with intent. Log every set.
          </h1>

          <p className="mt-6 max-w-490px text-base leading-relaxed text-[#8b909c]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#c6f600] px-6 py-3 
            text-xs font-bold tracking-wider text-[#0b0d12]"
          >
            BROWSE WORKOUTS
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src={heroImg}
            alt="Banner"
            className="h-340px w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
