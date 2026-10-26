"use client";

import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
const NavCounts = () => {
  const { plan, saved } = usePlan();

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/myplan"
        className="flex items-center gap-2 text-[13px] text-[#c9ccd3]"
      >
        <span>Plan</span>
        <span
          className="flex h-22px min-w-22px items-center justify-center rounded-full bg-[#c6f600] 
        px-7px text-xs font-bold text-[#0b0d12]"
        >
          {plan.length}
        </span>
      </Link>

      <Link
        href="/myplan"
        className="flex items-center gap-2 text-[13px] text-[#c9ccd3]"
      >
        <span>Saved</span>
        <span
          className="flex h-22px min-w-22px items-center justify-center rounded-full border
         border-[#3a3f4a] px-7px text-xs font-bold text-[#c9ccd3]"
        >
          {saved.length}
        </span>
      </Link>
    </div>
  );
};

export default NavCounts;
