"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePlan } from "@/context/PlanContext";

const MyPlanPage = () => {
  const {
    plan,
    saved,
    loaded,
    addToPlan,
    removeFromPlan,
    removeFromSaved,
    toggleDone,
  } = usePlan();

  const [tab, setTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const totalMinutes = plan.reduce((sum, item) => sum + item.duration, 0);
  const totalCalories = plan.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0,
  );

  const list = tab === "plan" ? plan : saved;

  const sortedList = [...list].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    return a[sortBy] - b[sortBy];
  });

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="font-['Bebas_Neue'] text-5xl uppercase text-white">
        My Plan
      </h1>
      <p className="mt-1 text-sm text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-8 grid grid-cols-3 rounded-xl border border-gray-800 bg-[#12141a] p-6">
        <div>
          <p className="text-sm text-gray-400">Exercises</p>
          <p className="font-['Bebas_Neue'] text-5xl text-[#c6f600]">
            {plan.length}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Minutes</p>
          <p className="font-['Bebas_Neue'] text-5xl text-white">
            {totalMinutes}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Calories</p>
          <p className="font-['Bebas_Neue'] text-5xl text-white">
            {totalCalories}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-1 rounded-lg border border-gray-800 bg-[#12141a] p-1">
          <button
            onClick={() => setTab("plan")}
            className={`rounded-md px-4 py-2 text-xs font-semibold ${
              tab === "plan" ? "bg-gray-700 text-white" : "text-gray-400"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setTab("saved")}
            className={`rounded-md px-4 py-2 text-xs font-semibold ${
              tab === "saved" ? "bg-gray-700 text-white" : "text-gray-400"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span>Sort By</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-gray-800 bg-[#12141a] px-3 py-2 text-white"
          >
            <option value="duration">Duration</option>
            <option value="caloriesBurned">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {!loaded && (
          <p className="py-10 text-center text-gray-400">Loading workouts…</p>
        )}

        {loaded && sortedList.length === 0 && (
          <div className="rounded-xl border border-gray-800 bg-[#12141a] px-6 py-16 text-center">
            <h2 className="font-['Bebas_Neue'] text-3xl uppercase text-white">
              Nothing here yet
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block rounded-lg bg-[#c6f600] px-5 py-3 text-sm font-semibold text-black"
            >
              Go to workouts
            </Link>
          </div>
        )}

        {loaded &&
          sortedList.map((item) => (
            <div
              key={item.id}
              className={`flex flex-wrap items-center gap-4 rounded-xl border border-gray-800 bg-[#12141a] p-4 ${
                tab === "plan" && item.done ? "opacity-60" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={144}
                height={80}
                className="h-20 w-36 rounded-lg object-cover object-top"
              />

              <div className="flex-1">
                <h3 className="font-['Bebas_Neue'] text-xl uppercase text-white">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500">{item.equipment}</p>
                <div className="mt-2 flex gap-4 text-xs text-gray-300">
                  <span>{item.duration} min</span>
                  <span>{item.caloriesBurned} kcal</span>
                  <span>★ {item.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={`/workouts/${item.id}`}
                  className="rounded-full border border-gray-700 px-4 py-2 text-xs text-white"
                >
                  View Details
                </Link>

                {tab === "plan" ? (
                  <button
                    onClick={() => toggleDone(item.id)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#c6f600] px-4 py-2 text-xs font-semibold text-black"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {item.done ? "Done" : "Mark as Done"}
                  </button>
                ) : (
                  <button
                    onClick={() => addToPlan(item)}
                    className="rounded-full bg-[#c6f600] px-4 py-2 text-xs font-semibold text-black"
                  >
                    Add to Plan
                  </button>
                )}

                <button
                  onClick={() =>
                    tab === "plan"
                      ? removeFromPlan(item.id)
                      : removeFromSaved(item.id)
                  }
                  className="px-2 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default MyPlanPage;
