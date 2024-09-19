import { style } from "@vanilla-extract/css";

const red = style({ color: "red" });
const blue = style({ color: "blue" });
// export const redAndBlue = style([red, blue]);
// export const blueAndRed = style([blue, red]);

export const redAndBlue = style([{ color: "red" }, { color: "blue" }]);
export const blueAndRed = style([{ color: "blue" }, { color: "red" }]);

// import { recipe } from '@vanilla-extract/recipes';
// export const redAndBlueRecipe =  recipe({
//   base: [{ color: "red" }, { color: "blue" }],
//   propert
//   variants: {

//   },
// }
