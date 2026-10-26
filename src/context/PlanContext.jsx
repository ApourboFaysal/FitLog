"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";

const PlanContext = createContext();

const EMPTY = [];

function safeParse(raw, fallback) {
  try {
    return raw !== null ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function subscribe(callback) {
  window.addEventListener("storage", callback);
  window.addEventListener("local-storage", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("local-storage", callback);
  };
}

function useLocalStorage(key, initialValue) {
  const raw = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(key),
    () => null,
  );

  const value = useMemo(
    () => safeParse(raw, initialValue),
    [raw, initialValue],
  );

  const setValue = useCallback(
    (next) => {
      const current = safeParse(localStorage.getItem(key), initialValue);
      const resolved = typeof next === "function" ? next(current) : next;
      localStorage.setItem(key, JSON.stringify(resolved));
      window.dispatchEvent(new Event("local-storage"));
    },
    [key, initialValue],
  );

  return [value, setValue];
}

const noopSubscribe = () => () => {};

export function PlanProvider({ children }) {
  const [plan, setPlan] = useLocalStorage("plan", EMPTY);
  const [saved, setSaved] = useLocalStorage("saved", EMPTY);
  const loaded = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
  const [toast, setToast] = useState("");

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(""), 2000);
  }

  function addToPlan(item) {
    const alreadyAdded = plan.some((p) => p.id === item.id);
    if (alreadyAdded) {
      showToast("Already in today's plan");
      return;
    }

    const notDoneCount = plan.filter((p) => !p.done).length;
    if (notDoneCount >= 5) {
      showToast("Plan is full. Finish a lift first");
      return;
    }

    setPlan([...plan, { ...item, done: false }]);
    showToast("Added to today's plan");
  }

  function addToSaved(item) {
    const alreadySaved = saved.some((s) => s.id === item.id);
    if (alreadySaved) {
      showToast("Already saved");
      return;
    }

    setSaved([...saved, item]);
    showToast("Saved for later");
  }

  function removeFromPlan(id) {
    setPlan(plan.filter((p) => p.id !== id));
    showToast("Removed from today's plan");
  }

  function removeFromSaved(id) {
    setSaved(saved.filter((s) => s.id !== id));
    showToast("Removed from saved");
  }

  function toggleDone(id) {
    const item = plan.find((p) => p.id === id);
    setPlan(plan.map((p) => (p.id === id ? { ...p, done: !p.done } : p)));
    showToast(item.done ? "Marked as not done" : "Marked as done");
  }

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        loaded,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        toggleDone,
      }}
    >
      {children}

      {toast && (
        <div className="fixed top-16 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-[#c6f600] px-5 py-3 text-sm font-semibold text-black">
          {toast}
        </div>
      )}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}
