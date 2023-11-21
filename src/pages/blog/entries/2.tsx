import { SiteBlog, TextBlock } from "../../../styles/siteStyles";
import BlogBack from "../../../components/global/BlogBack";
import BlogHeader from "../../../components/global/BlogHeader";
import SiteImage from "../../../components/global/SiteImage";

export const info_2 = {
    title: "Quest 64 logo remaster",
    subtitle: "Remastering the timeless logo in HD",
    date: "11-19-23",
    route: "2"
};

function BlogPost2() {
    const info = info_2;
    return (
        <SiteBlog>
            <BlogBack />
            <BlogHeader title={info.title} subtitle={info.subtitle} date={info.date} />
            <TextBlock>
                Short blog today - so I was recently commissioned to complete some Quest 64-related work, and had to render a portion of the original logo for a title banner. So, I thought, why not finish the entire logo? Here is the final result: 
            </TextBlock>
            <SiteImage src="/images/blog/2/quest64_logo_hd.png" clickToOpen={true}/>
            <TextBlock>
                During research, I was surprised to find that there were not many high-definition or color-accurate scans of the logo (or any of the game's assets for that matter). This was finalized with few references and a combination of various sources, mostly from archive.org, to track down the right colors. Of course, there exists a small portion of my own interpretation, but that's part of the fun. Feel free to use this for any personal projects, credit would be appreciated.
            </TextBlock>
            <TextBlock>
                Joe
            </TextBlock>
        </SiteBlog>
    );
}
export default BlogPost2;