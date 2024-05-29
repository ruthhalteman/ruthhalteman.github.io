export const getYardage = (strips, width) => {
  const yardage = (strips * width) / 36;
  return yardage < 0.25
    ? `${strips * width}" long`
    : `${yardage.toString().slice(0, 4)} yard${yardage > 1 ? "s" : ""}`;
};
