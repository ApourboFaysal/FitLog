const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-[#c6f600]" />
      <p className="text-sm text-gray-400">Loading workouts…</p>
    </div>
  );
};

export default Loader;
