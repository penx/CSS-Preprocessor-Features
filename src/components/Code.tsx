import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
export const Code = (props: React.ComponentProps<typeof SyntaxHighlighter>) => {
  return <SyntaxHighlighter {...props} style={oneDark} />;
};
