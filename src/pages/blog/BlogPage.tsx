import { blogEntries } from "../../data/content/blog";
import { SiteLink, SitePage } from "../../styles/siteStyles";

function BlogPage() {
    return (
        <SitePage>
            [Latest]<br />
            {
                blogEntries.map((entry, i) => {
                    return (
                        <SiteLink
                            key={i}
                            to={"/blog/" + entry.route}>
                            {entry.date} - {entry.title}
                        </SiteLink>
                    );
                })
            }
        </SitePage>
    );
}
export default BlogPage;