import create from 'zustand';
import Cookies from 'js-cookie';

interface TimerState {
  seconds: number;
  setSeconds: (seconds: number) => void;
  incrementSeconds: () => void;
  startTimer: () => void;
  stopTimer: () => void;
}

const useTimerStore = create<TimerState>((set, get) => {
  let timerRef: NodeJS.Timeout | null = null;
  let cookieIntervalRef: NodeJS.Timeout | null = null;

  return {
    seconds: 0,
    setSeconds: (seconds: number) => set({ seconds }),
    incrementSeconds: () => set((state) => ({ seconds: state.seconds + 1 })),
    startTimer: () => {
      if (!timerRef) {
        timerRef = setInterval(() => {
          get().incrementSeconds();
        }, 1000);
      }
      if (!cookieIntervalRef) {
        cookieIntervalRef = setInterval(() => {
          const { seconds } = get();
          Cookies.set("timer", seconds.toString());
        }, 1000);
      }
    },
    stopTimer: () => {
      if (timerRef) {
        clearInterval(timerRef);
        timerRef = null;
      }
      if (cookieIntervalRef) {
        clearInterval(cookieIntervalRef);
        cookieIntervalRef = null;
      }
    },
  };
});

export default useTimerStore;
