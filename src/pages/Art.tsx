import { ExternalLink, SectionHeader, SitePage, TextBlock } from "../styles/siteStyles";
import SiteImage from "../components/_global/SiteImage";
import PageBreak from "../components/_global/PageBreak";

// Art page element
function Art() {
    return (
        <SitePage>
            <SectionHeader>Art</SectionHeader>
            <TextBlock>
                <ExternalLink href="https://www.instagram.com/pngsequence/" target="_blank">Instagram</ExternalLink>&nbsp;
                <ExternalLink href="https://twitter.com/pngsequence/media" target="_blank">Twitter</ExternalLink>&nbsp;
            </TextBlock>
            <TextBlock>
                I have been creating digital art and illustrations for as long as I can remember. I have been known for my abstract and simple yet striking style. I strive to create distinct art that is both appealing and memorable, and moreover, makes people happy. If you'd like to work with me or commission an art piece, please send me an email.
            </TextBlock>
            <ExternalLink href="/images/art/art_example_robot.png" target="_blank">
                <SiteImage src="/images/art/art_example_robot_small.png"></SiteImage>
            </ExternalLink>
            <PageBreak />
            <ExternalLink href="/images/art/art_example_boom.png" target="_blank">
                <SiteImage src="/images/art/art_example_boom_small.png"></SiteImage>
            </ExternalLink>
            <PageBreak />
            <ExternalLink href="/images/art/art_example_night.png" target="_blank">
                <SiteImage src="/images/art/art_example_night_small.png"></SiteImage>
            </ExternalLink>
            <PageBreak />
            <ExternalLink href="/images/art/art_example_color.png" target="_blank">
                <SiteImage src="/images/art/art_example_color_small.png"></SiteImage>
            </ExternalLink>
            <PageBreak />
            <ExternalLink href="/images/art/art_example_mages.png" target="_blank">
                <SiteImage src="/images/art/art_example_mages_small.png"></SiteImage>
            </ExternalLink>
            <PageBreak />
            <ExternalLink href="/images/art/art_example_mages_2.png" target="_blank">
                <SiteImage src="/images/art/art_example_mages_2.png"></SiteImage>
            </ExternalLink>
            <PageBreak />
            <ExternalLink href="/images/art/art_example_garden.png" target="_blank">
                <SiteImage src="/images/art/art_example_garden.png"></SiteImage>
            </ExternalLink>
        </SitePage>
    );
}
export default Art;