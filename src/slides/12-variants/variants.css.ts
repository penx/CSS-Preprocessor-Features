import { recipe } from "@vanilla-extract/recipes";

export const redAndBlue = recipe({
  base: [{ color: "red" }, { color: "blue" }],
  variants: {},
});
export const blueAndRed = recipe({
  base: [{ color: "blue" }, { color: "red" }],
  variants: {},
});
