import { create } from "zustand";

interface StoreState {
  count: number;
  firstOnboardingComplited: boolean;
  increase: () => void;
  decrease: () => void;
  completeOnboarding: () => void;
}

const useStore = create<StoreState>((set) => ({
  count: Number(localStorage.getItem("count")) || 0, // Получение значения из localStorage
  firstOnboardingComplited:
    Boolean(localStorage.getItem("firstOnboardingComplited")) || false,
  increase: () =>
    set((state) => {
      const newCount = state.count + 1;
      localStorage.setItem("count", newCount.toString()); // Сохранение значения в localStorage
      return { count: newCount };
    }),
  firstOnboardingCompleted: false, // State variable to track onboarding completion
  completeOnboarding: () => {
    localStorage.setItem("firstOnboardingComplited", "true"); // Save to localStorage
    set({ firstOnboardingComplited: true }); // Update state
  },
  decrease: () =>
    set((state) => {
      const newCount = state.count - 1;
      localStorage.setItem("count", newCount.toString()); // Сохранение значения в localStorage
      return { count: newCount };
    }),
  setCount: (count: { toString: () => string }) => {
    localStorage.setItem("count", count.toString()); // Сохранение значения в localStorage
    set({ count: Number(count) });
  },
}));
export default useStore;
