import "./nested.scss";

import { Code } from "../../components/Code";

export const Nested = () => (
  <section className="nested">
    <ol>
      <li>
        <a href="https://sass-lang.com/documentation/style-rules/">
          Sass Style Rules
        </a>
      </li>
      <li>
        <a href="https://tabatkins.github.io/specs/css-nesting/">
          CSS Nesting Module Level 3
        </a>
      </li>
    </ol>
    <Code language="scss">
      {`ul {
  border: 1px solid red;
  li {
    border: 1px solid blue;

    &:last-child {
      padding: 10px;
      text-decoration: underline;
    }
  }
}`}
    </Code>
    <ul>
      <li>hi</li>
      <li>hi</li>
    </ul>

    <h3>Extending class names</h3>
    <Code language="scss">
      {`.button {
  font-size: 1.2rem;
  color: white;
  background-color: green;
  &-large {
    font-size: 1.6rem;
  }
}`}
    </Code>
    <button className="button">button</button>
    <button className="button-large">button-large</button>
    <button className="button button-large">button button-large</button>
  </section>
);
