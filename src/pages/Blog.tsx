import styled from "styled-components";
import { SectionHeader, SiteLink, SitePage, TextBlock } from "../styles/siteStyles";
import blogEntries from "./blog/BlogEntries";
import siteConstants from "../data/constants/siteConstants.json";

// Blog page element
function Blog() {
  return (
    <SitePage>
      <SectionHeader>Blog</SectionHeader>
      <BlogBlock>
        [Latest]
        <br />
        {
          // Map blog entires to blog page links
          blogEntries.map((entry: any, i: number) => {
            return (
              <BlogEntryLink key={i}>
                <SiteLink to={"/blog/" + entry.route}>
                  {entry.date} - {entry.title}
                </SiteLink>
                <br/>
              </BlogEntryLink>
            );
          })
        }
        [Oldest]
      </BlogBlock>
    </SitePage>
  );
}
export default Blog;

const BlogEntryLink = styled.span`
  overflow-x: hidden;
  max-width: calc(100% - ${siteConstants.dimensions.global.spacing});
  text-wrap: nowrap;
  text-overflow: ellipsis;
  margin: 0;
`;

const BlogBlock = styled(TextBlock)`
  margin-bottom: 0px;
`;