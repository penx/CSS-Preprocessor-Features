import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
const space = {
  none: 0,
  small: "4px",
  medium: "8px",
  large: "16px",
  // etc.
};

const responsiveProperties = defineProperties({
  properties: {
    color: ["red", "green", "blue"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);
