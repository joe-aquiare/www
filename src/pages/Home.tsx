import { ExternalLink, SectionHeader, SitePage, TextBlock } from "../styles/siteStyles";

// Home page element
function Home() {
  return (
    <SitePage>
      <SectionHeader>Home</SectionHeader>
      <TextBlock>
        Hey there, my name is Joe - I'm a professional software engineer who enjoys game development, music production, illustration, and graphic design. For inquiries, or if you'd like to work together, please email me at <ExternalLink href="mailto:joeaquiare@gmail.com">joeaquiare@gmail.com</ExternalLink>.
      </TextBlock>
      <TextBlock>
        This site is always a work in progress.
      </TextBlock>
      <TextBlock style={{ paddingLeft: "40%", userSelect: "none" }}>
        <br/>
        &nbsp;／l、<br/>
        （ﾟ､ ｡ ７<br/>
        &nbsp;&nbsp;l  ~ヽ<br/>
        &nbsp;&nbsp;じしf_,)ノ<br/>
      </TextBlock>
    </SitePage>
  );
}
export default Home;