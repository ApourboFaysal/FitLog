"use client";

import { usePlan } from "@/context/PlanContext";

const DetailButtons = ({ excercise }) => {
  const { plan, saved, addToPlan, addToSaved } = usePlan();

  const inPlan = plan.some((p) => p.id === excercise.id);
  const isSaved = saved.some((s) => s.id === excercise.id);

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        onClick={() => addToPlan(excercise)}
        disabled={inPlan}
        className="rounded-lg bg-[#c6f600] px-5 py-3 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-60"
      >
        📅 {inPlan ? "Added to plan" : "Add to today's plan"}
      </button>

      <button
        onClick={() => addToSaved(excercise)}
        disabled={isSaved}
        className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        🔖 {isSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default DetailButtons;
