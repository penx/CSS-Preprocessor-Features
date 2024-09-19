import { style } from "@vanilla-extract/css";

const red = style({ color: "red" });
const blue = style({ color: "blue" });
export const redAndBlue = style([red, blue]);
export const blueAndRed = style([blue, red]);
