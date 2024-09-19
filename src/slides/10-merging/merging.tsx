import * as styles from "./merging.css";

export const Merging = () => (
  <section>
    <h3>Limitations of composition without merging</h3>
    <p>Class name order does not impact specificity</p>
    <div className={styles.redAndBlue}>redAndBlue</div>
    <div className={styles.blueAndRed}>blueAndRed</div>
    <ul>
      <li>
        <a href="https://vanilla-extract.style/documentation/style-composition/">
          Vanilla Extract
        </a>
      </li>
      <li>
        <a href="https://stylex-docusaurus.vercel.app/docs/getting-started/merging-styles/">
          StyleX
        </a>
      </li>
      <li>
        <a href="https://www.npmjs.com/package/tailwind-merge">
          Tailwind merge
        </a>
      </li>
    </ul>
  </section>
);
