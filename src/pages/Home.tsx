import { SectionHeader, SitePage, TextBlock } from "../styles/siteStyles";

// Home page element
function Home() {
  return (
    <SitePage>
      <SectionHeader>Home</SectionHeader>
      <TextBlock>
        Hey there, my name is Joe - I'm a professional software engineer who enjoys game development, music production, illustration, and graphic design. For inquiries, or if you'd like to work together, please email me at joeaquiare@gmail.com.
      </TextBlock>
      <TextBlock>
        This site is a work in progress.
      </TextBlock>
    </SitePage>
  );
}
export default Home;
