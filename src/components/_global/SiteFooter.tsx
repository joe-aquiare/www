import { ExternalLink } from "../../styles/siteStyles";
import styled from "styled-components";
import siteConstants from "../../data/constants/siteConstants.json";

// Array of footer link content
const footerLinks = [
  {
    name: "twitter",
    to: "https://www.twitter.com/pngsequence",
  },
  {
    name: "instagram",
    to: "https://www.instagram.com/pngsequence/",
  },
  {
    name: "email",
    to: "mailto:joeaquiare@gmail.com",
  },
];

// Site footer element
function SiteFooter() {
  return (
    <SiteFooterContainer>
      <SiteFooterLinks />
    </SiteFooterContainer>
  );
}
export default SiteFooter;

// Container for site footer element
const SiteFooterContainer = styled.div`
  position: absolute;
  margin: -1px;
  bottom: 0px;
  border: 1px solid ${siteConstants.colorScheme.medium};
  height: fit-content;
  width: 100%;
  padding-top: 4px;
  @media only screen and (max-width: ${siteConstants.dimensions.siteContent.mobileWidth}) {
    border: none;
    position: inherit;
    align-content: center;
    text-align: center;
  }
`;

// Site footer links group element
function SiteFooterLinks() {
  return (
    <SiteFooterLinksContainer>
      {footerLinks.map((page, i) => (
        <SiteFooterLink key={i} linkText={page.name} linkTo={page.to} />
      ))}
    </SiteFooterLinksContainer>
  );
}

// Container for footer links group element
const SiteFooterLinksContainer = styled.ul`
  list-style: none;
  display: inline-flex;
  margin: 0 auto;
  text-align: center;
  align-content: center;
  padding: ${siteConstants.dimensions.global.spacing};
`;

// Props for footer link element
interface SiteFooterLinkProps {
  linkText: string;
  linkTo: string;
}

// Footer link element
function SiteFooterLink(props: SiteFooterLinkProps) {
  return (
    <SiteFooterLinkConainer>
      [
      <ExternalLink href={props.linkTo} target="_blank" rel="noreferrer">
        {props.linkText}
      </ExternalLink>
      ]
    </SiteFooterLinkConainer>
  );
}

// COntainer for footer link element
const SiteFooterLinkConainer = styled.li`
  margin-right: 12px;
`;
