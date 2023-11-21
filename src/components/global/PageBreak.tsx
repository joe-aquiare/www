import styled from "styled-components";

// Simple page break element for text blocks
function PageBreak() {
  return <PageBreakContainer />;
}
export default PageBreak;

// Container for page break element
const PageBreakContainer = styled.span`
  height: 1em;
  width: 100%;
  display: block;
`;
