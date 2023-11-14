import { SectionHeader, SiteLink, SitePage, TextBlock } from "../styles/siteStyles";
import blogEntries from "./blog/BlogEntries";

// Blog page element
function Blog() {
  return (
    <SitePage>
      <SectionHeader>Blog</SectionHeader>
      <TextBlock>
        [Latest]
        <br />
        {
          // Map blog entires to blog page links
          blogEntries.map((entry: any, i: number) => {
            return (
              <SiteLink key={i} to={"/blog/" + entry.route}>
                {entry.date} - {entry.title}
              </SiteLink>
            );
          })
        }
      </TextBlock>
    </SitePage>
  );
}
export default Blog;
