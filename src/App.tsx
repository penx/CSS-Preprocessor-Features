import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import { Nested } from "./slides/01-nested-selectors/nested";
import { Coupling } from "./slides/02-coupling-bundling";
import { Variables } from "./slides/03-variables-calculations";
import { Composition } from "./slides/04-composition";
import { VendorPrefixes } from "./slides/05-vendor-prefixes";
import { Scoping } from "./slides/06-scoping";
import { CSSinJS } from "./slides/07-defining-in-js";
import { ThemeSpecification } from "./slides/08-theme-specification";
import { StyleProps } from "./slides/09-style-props";
import { Merging } from "./slides/10-merging/merging";
import { RuntimeMerging } from "./slides/11-runtime-merging";
import { Variants } from "./slides/12-variants";
import { More } from "./slides/13-more";

const Sections = [
  {
    key: "nested-selectors",
    title: "Nested selectors",
    Component: Nested,
  },
  {
    key: "coupling",
    title: "Coupling, Bundling",
    Component: Coupling,
  },
  { key: "variables", title: "Variables", Component: Variables },
  { key: "composition", title: "(Not) Composition", Component: Composition },
  {
    key: "vendor-prefixes",
    title: "Vendor Prefixes",
    Component: VendorPrefixes,
  },
  { key: "scoping", title: "Scoping", Component: Scoping },
  { key: "css-in-js", title: "CSSinJS", Component: CSSinJS },
  {
    key: "theme-specification",
    title: "Theme Specification",
    Component: ThemeSpecification,
  },
  { key: "styleprops", title: "Style Props", Component: StyleProps },
  { key: "merging", title: "Merging", Component: Merging },
  {
    key: "runtime-merging",
    title: "Runtime Merging",
    Component: RuntimeMerging,
  },
  { key: "variants", title: "Variants", Component: Variants },
  { key: "more", title: "More", Component: More },
];

const Menu = ({ previous, next }: { previous?: string; next?: string }) => {
  // window.addEventListener(
  //   "keydown",
  //   (event) => {
  //     if (event.defaultPrevented) {
  //       return; // Do nothing if the event was already processed
  //     }

  //     switch (event.key) {
  //       case "ArrowDown":
  //         // Do something for "down arrow" key press.
  //         break;
  //       case "ArrowUp":
  //         // Do something for "up arrow" key press.
  //         break;
  //       case "ArrowLeft":
  //         // Do something for "left arrow" key press.
  //         break;
  //       case "ArrowRight":
  //         // Do something for "right arrow" key press.
  //         break;
  //       case "Enter":
  //         // Do something for "enter" or "return" key press.
  //         break;
  //       case "Escape":
  //         // Do something for "esc" key press.
  //         break;
  //       default:
  //         return; // Quit when this doesn't handle the key event.
  //     }

  //     // Cancel the default action to avoid it being handled twice
  //     event.preventDefault();
  //   },
  //   true,
  // );
  return (
    <div className="menu">
      {previous ? (
        <>
          <Link accessKey="1" to={previous}>
            &lt;
          </Link>{" "}
        </>
      ) : (
        <>
          <span>&lt;</span>{" "}
        </>
      )}
      <Link to="/" accessKey="0">
        index
      </Link>
      {next ? (
        <>
          {" "}
          <Link accessKey="2" to={next}>
            &gt;
          </Link>
        </>
      ) : (
        <>
          {" "}
          <span> &gt;</span>
        </>
      )}
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Preprocessor Features</h1>
        <p>Terminology of features in CSS preprocessor libraries</p>
        <ol>
          {Sections.map((section, i) => (
            <li key={section.key}>
              <Link accessKey={i + 1 < 10 ? i + 1 : undefined} to={section.key}>
                {section.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    ),
  },
  ...Sections.map((section, i, sections) => ({
    path: section.key,
    element: (
      <div style={{ counterSet: "h2 " + i }}>
        <Menu
          previous={i >= 1 ? "/" + sections[i - 1].key : undefined}
          next={i < sections.length - 1 ? "/" + sections[i + 1].key : undefined}
        />
        <h2>{section.title}</h2>
        <section.Component />
      </div>
    ),
  })),
]);

export const App = () => (
  <>
    <RouterProvider router={router} />
    {/* <h1>Preprocessor Features</h1>
    <p>Terminology of features in CSS preprocessor libraries</p>
    <Nested />
    <Coupling />
    */}
  </>
);
