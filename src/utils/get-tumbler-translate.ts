export const getTumblerTranslateX = ({
  switchWidth,
  tumbletWidth,
  tumblerLeftPosition,
}: Record<string, number>) => {
  return switchWidth - tumbletWidth - 2 * tumblerLeftPosition;
};
