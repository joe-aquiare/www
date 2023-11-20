import styled from "styled-components";
import { ExternalLink, SectionHeader, SitePage, TextBlock } from "../styles/siteStyles";

// Contact page element
function Contact() {
  return (
    <SitePage>
      <SectionHeader>Contact</SectionHeader>
      <ContactBlock>
        Email:&nbsp;&nbsp;&nbsp;→&nbsp;<ExternalLink href="mailto:joeaquiare@gmail.com" target="_blank">joeaquiare@gmail.com</ExternalLink><br />
        Twitter:&nbsp;→&nbsp;<ExternalLink href="https://twitter.com/pngsequence" target="_blank">@pngsequence</ExternalLink><br />
        Discord:&nbsp;→&nbsp;<ExternalLink href="https://discordapp.com/users/142436317203005440" target="_blank">@pngsequence</ExternalLink><br />
      </ContactBlock>
    </SitePage>
  );
}
export default Contact;

const ContactBlock = styled(TextBlock)`
  margin-bottom: 0px;
`;