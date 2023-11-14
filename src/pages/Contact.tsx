import { ExternalLink, SectionHeader, SitePage, TextBlock } from "../styles/siteStyles";

// Contact page element
function Contact() {
  return (
    <SitePage>
      <SectionHeader>Contact</SectionHeader>
      <TextBlock>
        Email: <ExternalLink href="mailto:joeaquiare@gmail.com" target="_blank">joeaquiare@gmail.com</ExternalLink><br />
        Twitter: <ExternalLink href="https://twitter.com/pngsequence" target="_blank">@pngsequence</ExternalLink><br />
        Discord: <ExternalLink href="https://discordapp.com/users/142436317203005440" target="_blank">@pngsequence</ExternalLink><br />
      </TextBlock>
    </SitePage>
  );
}
export default Contact;
