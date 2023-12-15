export const createStyleTranslateY = (
  translateToTop: boolean,
  translateY: number,
) => ({
  transform: translateToTop ? `translateY(-${translateY}px)` : undefined,
});
