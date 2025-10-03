export const More = () => (
  <section>
    <blockquote>
      Static - Does the library generate CSS at compile time?
      <br />
      Atomic - Does the library generate atomic CSS?
      <br />
      Style Format - What format are styles authored in? Strings, Objects, or
      separate CSS files.
      <br />
      Co-location - Are the styles in the same file as your component?
      <br />
      Composition - Can you compose and merge styles across component
      boundaries? Can you pass styles as props?
      <br />
      Dynamic Styles - Can you generate styles with dynamic values not known
      until runtime?
      <br />
      Typed - Are the authored styles typed? Can constrain what styles are
      passed to components with static types? This is only relevant when
      composing styles.
      <br />
      Framework agnostic
    </blockquote>
  </section>
);
