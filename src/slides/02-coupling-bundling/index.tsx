import { Code } from "../../components/Code";

export const Coupling = () => (
  <section>
    <ol>
      <li>
        <a href="https://webpack.js.org/loaders/css-loader/">
          webpack css-loader
        </a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@import">
          @import
        </a>
      </li>
    </ol>
    <h3>Importing from JavaScript</h3>
    <Code language="js">import "./nested.css"</Code>
    <h3>Bundling</h3>
    <p>Generating a single CSS file</p>
    <h3>Dead Code Removal</h3>
    <p>When something isn't imported, it isn't included in the built CSS </p>
  </section>
);
