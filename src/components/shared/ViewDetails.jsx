import Image from "next/image";
import { notFound } from "next/navigation";
import { getExcercises } from "@/lib/getExcercises";
import DetailButtons from "@/components/shared/DetailButtons";

const ViewDetails = async ({ id }) => {
  const data = await getExcercises();
  const excercise = data.find((item) => String(item.id) === id);

  if (!excercise) {
    notFound();
  }

  const rows = [
    ["Equipment", excercise.equipment],
    ["Difficulty", excercise.difficulty],
    ["Sets", excercise.sets],
    ["Reps", excercise.reps],
    ["Duration", `${excercise.duration} min`],
    ["Calories", `${excercise.caloriesBurned} kcal`],
    ["Rating", excercise.rating],
  ];

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2">
      <Image
        src={excercise.image}
        alt={excercise.name}
        width={700}
        height={900}
        className="w-full rounded-2xl object-cover"
      />
      <div>
        <h1 className="font-['Bebas_Neue'] text-5xl uppercase text-white">
          {excercise.name}
        </h1>
        <p className="mt-3 text-gray-400">{excercise.description}</p>
        <div className="mt-4 flex gap-2">
          {excercise.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#c6f600] px-3 py-1 text-xs font-semibold text-black"
            >
              {group}
            </span>
          ))}
        </div>
        <div className="mt-8 rounded-xl border border-gray-800 bg-[#12141a]">
          {rows.map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between border-b border-gray-800 px-6 py-4 text-sm last:border-b-0"
            >
              <span className="font-semibold uppercase text-gray-500">
                {label}
              </span>
              <span className="text-white">{value}</span>
            </div>
          ))}
        </div>
        <h2 className="mt-10 text-lg font-bold uppercase text-white">
          Instructions
        </h2>
        <ol className="mt-4 space-y-3 text-sm text-gray-400">
          {excercise.instructions.map((step, index) => (
            <li key={index}>
              {index + 1}. {step}
            </li>
          ))}
        </ol>
        <DetailButtons excercise={excercise} />
      </div>
    </section>
  );
};

export default ViewDetails;
