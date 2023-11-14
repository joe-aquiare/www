import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";
import siteConstants from "../../data/constants/siteConstants.json";

// Props for code block
interface CodeBlockProps {
  language: string; // The language for the code block, supported languages: https://prismjs.com/#supported-languages
  code: string; // The code block to render
}

// The code block element
function CodeBlock(props: CodeBlockProps) {
  return (
    <CodeBlockContainer>
      <SyntaxHighlighter
        language={props.language}
        style={dark}
        customStyle={{
          border: "none",
          borderRadius: "0px",
          padding: siteConstants.dimensions.global.spacing,
          margin: "0",
          backgroundColor: "#302D28",
          boxShadow: "none",
          textShadow: "none",
          fontFamily: "Fragment Mono",
          fontSize: "12px",
        }}
      >
        {props.code}
      </SyntaxHighlighter>
    </CodeBlockContainer>
  );
}
export default CodeBlock;

// Container for the code block element
const CodeBlockContainer = styled.div`
  margin-top: ${siteConstants.dimensions.global.spacing};
  font-size: 12px !important;
  font-family: "Fragment Mono" !important;
`;
