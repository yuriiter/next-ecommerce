import {
  useCallback,
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
} from "react";

export const useHideNavigation = (): [boolean, number] => {
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  const [hide, setHide] = useState(false);
  const [navigationHeight, setNavigationHeight] = useState(0);
  const prevScrollTopRef = useRef<number>(0);
  const navigationRef = useRef<Element | null>(null);

  const onScrollOrResize = useCallback(() => {
    const { current: navigation } = navigationRef;
    const navigationHeight = navigation?.getBoundingClientRect().height || 0;
    setNavigationHeight(navigationHeight);

    const { scrollY } = window;
    setHide(scrollY > prevScrollTopRef.current && scrollY > 132);
    prevScrollTopRef.current = scrollY;
  }, []);

  useIsomorphicLayoutEffect(() => {
    prevScrollTopRef.current = window.scrollY;
    const navigation = document.querySelector(".navigation");
    navigationRef.current = navigation;
    const navigationHeight = navigation?.getBoundingClientRect().height || 0;
    setNavigationHeight(navigationHeight);

    window.addEventListener("scroll", onScrollOrResize);
    window.addEventListener("resize", onScrollOrResize);

    return () => window.removeEventListener("scroll", onScrollOrResize);
  }, [onScrollOrResize]);

  return [hide, navigationHeight];
};
