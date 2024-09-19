import { Code } from "../../components/Code";

export const Variables = () => (
  <section>
    <h3>
      <a href="https://sass-lang.com/documentation/variables/">
        Sass Variables
      </a>
      <Code language="scss">{`$nav-width: 300px;
$base-color: #c6538c;`}</Code>
    </h3>
    <h3>
      <a href="https://sass-lang.com/documentation/variables/">CSS Variables</a>
      <Code language="css">{`--nav-width: 300px;
--base-color: #c6538c;`}</Code>
    </h3>{" "}
    <h3>Calculations</h3>
    <h4>Space</h4>
    <Code language="scss">{`$item-padding: 10px;
width: ($nav-width / 2) - item-padding;
`}</Code>
    <Code language="css">{`--item-padding: 10px;
width: calc((--nav-width / 2) - --item-padding);
`}</Code>
    <h4>Colour offsets</h4>
    <Code language="scss">{`$border-dark: rgba($base-color, 0.88);
`}</Code>
    <Code language="css">{`--base-color: 198, 83, 140; // #c6538c
--border-dark: rgba(var(--base-color), 0.88);
`}</Code>
    <h3>Sass</h3>
    <p>Not at runtime</p>
    <h3>CSS Variables and calc</h3>
    <p>Mixed units.</p>
    <h3>Contextual Tokens</h3>
    <p>
      Dark mode isn't always a full page switch, sometimes section of a page
      could invert the current mode or enforce a specific mode.
    </p>
    <p>
      Note that CSS Variables are contextual, wheras{" "}
      <a href="https://sass-lang.com/documentation/variables/">
        Sass variables are not
      </a>
      .
    </p>
    <h3>CSS Variables and Dark Mode preference</h3>
    <p>Open problem (?)</p>
    <p>
      How can you use CSS variables for dark mode while respecting user
      preference, without any runtime scripts?
    </p>
    <p>
      We can use a CSS variable to determine which part of a page have dark
      mode. But a user's dark mode preference can also be detected with media
      queries. Say you want a toggle to allow users override their preference,
      that defaults to their preference. How to represent with CSS variables, in
      a way that works with hydration and does not require runtime JS?
    </p>
  </section>
);
