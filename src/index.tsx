import { render } from "react-dom";
import { App } from "./App";
import "@fontsource/oswald";
import "@fontsource/oswald/200.css";
import "@fontsource/oswald/300.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/600.css";
import "@fontsource/oswald/700.css";
import "@fontsource/stardos-stencil/400.css";
import "@fontsource/stardos-stencil/700.css";
import "@fontsource/big-shoulders-stencil-text/100.css";
import "@fontsource/big-shoulders-stencil-text/200.css";
import "@fontsource/big-shoulders-stencil-text/300.css";
import "@fontsource/big-shoulders-stencil-text/400.css";
import "@fontsource/big-shoulders-stencil-text/500.css";
import "@fontsource/big-shoulders-stencil-text/600.css";
import "@fontsource/big-shoulders-stencil-text/700.css";
import "@fontsource/big-shoulders-stencil-text/800.css";
import "@fontsource/big-shoulders-stencil-text/900.css";
import '@fontsource/merriweather/300.css';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/merriweather/900.css';

import "./index.css";

const root = document.createElement("div");
document.body.appendChild(root);

render(<App />, root);
