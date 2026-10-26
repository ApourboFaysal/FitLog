import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getExcercises } from "@/lib/getExcercises";

const Excercises = async () => {
  const excercisesData = await getExcercises();

  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 pb-20 pt-16 sm:px-6">
      <h2 className="font-['Bebas_Neue'] text-4xl uppercase leading-none text-white">
        The Library
      </h2>
      <p className="mt-1 text-sm text-[#8b909c]">
        {excercisesData.length} lifts covering every major muscle group.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {excercisesData.map((excercise) => {
          return (
            <Link
              key={excercise.id}
              href={`/workouts/${excercise.id}`}
              className="block overflow-hidden rounded-xl border border-[#1f232c] bg-[#12141a]"
            >
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={excercise.image}
                  alt={excercise.name}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {excercise.muscleGroups.map((group) => (
                    <span
                      key={group}
                      className="rounded-full bg-[#c6f600] px-3 py-1 text-[11px] font-bold uppercase leading-none text-[#0b0d12]"
                    >
                      {group}
                    </span>
                  ))}
                </div>

                <h3 className="mt-4 font-['Bebas_Neue'] text-xl uppercase leading-none tracking-wide text-white">
                  {excercise.name}
                </h3>
                <p className="mt-2 text-xs text-[#6b7080]">
                  {excercise.equipment}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#1f232c] pt-4 text-xs text-[#8b909c]">
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    {excercise.duration} min
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2s5 4.5 5 9.5a5 5 0 0 1-10 0c0-1.8.8-3.2 1.8-4.2.2 1.2.9 2 1.7 2C10.5 7 11 4.5 12 2Z" />
                    </svg>
                    {excercise.caloriesBurned} kcal
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
                    </svg>
                    {excercise.rating}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Excercises;
