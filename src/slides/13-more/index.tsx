export const More = () => (
  <section>
    <h3>Current Options</h3>

    <p>CSS: Vanilla Extract, Panda CSS, CVA</p>
    <p>Headless: Radix Primitives, React ARIA, Headless UI</p>
    <p>
      Full: Radix Themes,{" "}
      <a href="https://github.com/shadcn-ui/ui">Shadcn UI</a>
    </p>
    <h3>Comparison table</h3>
    <img
      width="400"
      src="https://media.discordapp.net/attachments/803650425655656508/1159833403378638939/Screenshot_2023-10-04_at_11.png?ex=653bb088&is=65293b88&hm=9872187d822316e80ef8687ad070f120d38f80c5cd829baff3e2e152de75524c&=&width=1902&height=1286"
    />
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
    </blockquote>
    <h3>Tradeoffs</h3>
    <p>Tied to React</p>
    <p>UX/runtime tradeoff with emotion.</p>
    <blockquote>
      It is currently impossible for a child element to have conditional styles
      when it's parent is hovered
    </blockquote>
    <p>^ StyleX</p>
    <h3>Choices</h3>
    <p>Roll your own DS with headless, or use existing system</p>
  </section>
);
