import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import siteConstants from "../../data/constants/siteConstants.json"

interface CodeBlockProps {
    language: string,
    code: string,
}

function CodeBlock(props: CodeBlockProps) {
    return (
        <CodeBlockWrapper>
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
                    fontSize: "12px"
                }}>
                {props.code}
            </SyntaxHighlighter>
        </CodeBlockWrapper>
    );
}
export default CodeBlock;

const CodeBlockWrapper = styled.div`
    margin-top: ${siteConstants.dimensions.global.spacing};
    font-size: 12px !important;
    font-family: "Fragment Mono" !important;
`;