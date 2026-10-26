import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 text-center">
      <p className="font-['Bebas_Neue'] text-8xl text-[#c6f600]">404</p>
      <h1 className="mt-2 font-['Bebas_Neue'] text-4xl uppercase text-white">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-gray-400">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-[#c6f600] px-5 py-3 text-sm font-semibold text-black"
      >
        Back to workouts
      </Link>
    </section>
  );
}
