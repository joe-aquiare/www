import styled from "styled-components";
import siteConstants from "../../data/constants/siteConstants.json";
import PageBreak from "./PageBreak";

// Props for blog header
interface BlogHeaderProps {
  title: string;
  subtitle: string;
  date: string;
}

// Blog header element
function BlogHeader(props: BlogHeaderProps) {
  return (
    <>
      <BlogHeaderContainer>
        <BlogHeaderTitle>✦&nbsp;{props.title}</BlogHeaderTitle>
        <BlogHeaderSubtitle>{props.subtitle}</BlogHeaderSubtitle>
        <BlogHeaderDate>[{props.date}]</BlogHeaderDate>
      </BlogHeaderContainer>
      <PageBreak />
    </>
  );
}
export default BlogHeader;

// Container for blog header element
const BlogHeaderContainer = styled.div`
  color: ${siteConstants.colorScheme.dark};
  margin-bottom: ${siteConstants.dimensions.global.spacing};
  background-color: ${siteConstants.colorScheme.accent};
  padding: ${siteConstants.dimensions.global.spacing};
  font-weight: 900;
  position: relative;
`;

// Blog header title
const BlogHeaderTitle = styled.h1`
  font-size: 18px;
`;

// Blog header subtitle
const BlogHeaderSubtitle = styled.h1`
  padding-left: 27px;
`;

// Blog header date
const BlogHeaderDate = styled.h2`
  color: ${siteConstants.colorScheme.accent};
  position: absolute;
  top: calc(-1em - ${siteConstants.dimensions.global.spacing});
  right: -2px;
`;
