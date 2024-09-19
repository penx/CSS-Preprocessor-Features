export const Variants = () => (
  <section>
    <p>In an app, you often write less abstractions, with one component per purpose</p>
    <p>In a design system, there are a lot of abstractions, with multiple ways to use the same component</p>
    <p>
      On a component level and a styles level, it's good to have a consistent API for managing these abstractions - both in terms of the props you give to the component and the way you write the CSS.
    </p>
    <p>As per our previous button and button-large</p>
    <h4>Examples variants for a button</h4>

    <ul>
      <li>Ordinal/heriarchy/levels/priorities primary/secondary/tertiary</li>
      <li>Size large/medium/small</li>
      <li>Icon left/right/none</li>
    </ul>
    <h3>Compound Variants</h3>
    <p>Large, secondary button with an icon on the left.</p>
    <p>Small, primary button with an icon on the right.</p>

    <p>
      <a href="https://stitches.dev/docs/variants#compound-variants">
        Stitches
      </a>{" "}
      Perhaps you have button variants "colour" and "outlined"
    </p>
    <p>
      Compound variants refers to what should happen when multiple variants are
      chosen. e.g. "grey and outlined", "violet and outlined"
    </p>
    <h3>Responsive Variants</h3>
    <p>
      On small breakpoints the button should be primary, on large breakpoints it
      should be secondary.
    </p>
    <h3><a href="https://cva.style/docs">CVA</a></h3>
    <h3><a href="https://panda-css.com/docs/concepts/recipes#atomic-recipe-or-cva">Panda recipes</a></h3>
    <p>Panda <a href="https://panda-css.com/docs/concepts/slot-recipes">slot recipes</a> (sva)</p>
  </section>
);
