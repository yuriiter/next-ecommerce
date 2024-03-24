import { useHideNavigation } from "./useHideNavigation";
import { createStyleTranslateY } from "./utils";

export const useHideNavigationStyle = () => {
  const [translateToTop, translateY] = useHideNavigation();

  return createStyleTranslateY(translateToTop, translateY);
};
