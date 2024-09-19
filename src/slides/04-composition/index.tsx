import "./composition.scss";
import styles from "./composition.module.css";
import { Code } from "../../components/Code";

export const Composition = () => (
  <section>
    <Code language="css">{`.button {
  font-size: 1.2rem;
  color: white;
  background-color: green;
  &-large {
    font-size: 1.6rem;
  }
}`}</Code>
    <Code language="html">{`<button className="button button-large">Button</button>`}</Code>
    <button className="button button-large">Button</button>
    <p>Nested selectors good for same-component composition</p>

    <h3>Sass @extend</h3>
    <Code language="css">{`.button {
  font-size: 1.2rem;
  color: white;
  background-color: green;
}

.button-large {
  @extend .button;
  font-size: 1.6rem;
}`}</Code>
    <Code language="html">{`<button className="button-large">Button</button>`}</Code>

    <p>
      Useful for cross file/component composition, e.g. an unstyled button
      reset.
    </p>

    <h3>CSS Modules compose</h3>
    <Code language="css">{`.button {
  font-size: 1.2rem;
  color: white;
  background-color: green;
}

.button-large {
  composes: button;
  font-size: 1.6rem;
}`}</Code>

    <Code language="html">{`<button className={styles.button-large}>Button</button>`}</Code>
    <p>
      Useful for cross component composition, e.g. an unstyled button reset.
    </p>

    <h3>Caveats</h3>
    <h4>CSS Classes</h4>
    <p>Class name order doesn't matter. Order in CSS source matters.</p>
    <Code language="css">{`.red {
  color: red;
}
.blue {
  color: blue;
}
`}</Code>
    <p>How can we guarantee source order when bundling?</p>
    <Code language="html">{`<div className="red blue">red blue</div>
<div className="blue red">blue red</div>`}</Code>
    <div className="red blue">red blue</div>
    <div className="blue red">blue red</div>
    <h3>Sass @extend</h3>
    <Code language="css">{`
.redAndBlue {
  @extend .red;
  @extend .blue;
}

.blueAndRed {
  @extend .blue;
  @extend .red;
}
`}</Code>
    <div className="redAndBlue">redAndBlue</div>
    <div className="blueAndRed">blueAndRed</div>

    <h4>CSS Modules compose</h4>
    <Code language="css">{`.redAndBlue {
  composes: red;
  composes: blue;
}

.blueAndRed {
  composes: blue;
  composes: red;
}
`}</Code>
    <div className={styles.redAndBlue}>redAndBlue</div>
    <div className={styles.blueAndRed}>blueAndRed</div>
    <p>
      <a href="https://github.com/css-modules/css-modules/issues/12#issuecomment-113937851">
        Discussion
      </a>
    </p>
    <p>Continued in merging</p>
  </section>
);
