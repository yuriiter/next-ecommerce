import { useEffect } from "react";

type WindowSize = [number, number] | [undefined, undefined];
type Listener = (newWindowSize: WindowSize) => void;

const getWindowSize = (): WindowSize => {
  if (!window || !document) return [undefined, undefined];
  return [document.body.clientWidth, document.body.clientHeight];
};

class Observer {
  private hasEventListener = false;
  private listeners = new Set<Listener>();

  constructor() {
    this.eventListener = this.eventListener.bind(this);
  }

  private eventListener() {
    if (!window || !document) return;
    const newWindowSize = getWindowSize();
    this.listeners?.forEach((listener) => listener(newWindowSize));
  }

  public addListener(newListener: Listener) {
    this.listeners.add(newListener);
    if (!window || !document) return;
    if (!this.hasEventListener) {
      window.addEventListener("resize", this.eventListener);
      this.hasEventListener = true;
    }
  }

  public removeListener(listener: Listener) {
    this.listeners.delete(listener);
    if (!window || !document) return;
    if (this.listeners?.size === 0) {
      window.removeEventListener("resize", this.eventListener);
      this.hasEventListener = false;
    }
  }
}

const observer = new Observer();

export const useWindowListener = (
  customListener: Listener,
  dependencies?: Array<unknown>, // don't specify if customListener changes on each render (so, should be memoized)
) => {
  useEffect(
    () => {
      observer.addListener(customListener);

      return () => observer.removeListener(customListener);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies ?? [],
  );
};
