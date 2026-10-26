export const getExcercises = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      cache: "force-cache",
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
};
