import { SiteLink } from "../../styles/siteStyles";
import styled from "styled-components";
import siteConstants from "../../data/constants/siteConstants.json";

// Site navigation component
function SiteNavigation() {
  return (
    <SiteNavigationContainer>
      <SiteTitleContainer>
        <SiteTitle to="/home">joeaquiare.site/</SiteTitle>
      </SiteTitleContainer>
      <SiteNavigationLinks />
    </SiteNavigationContainer>
  );
}
export default SiteNavigation;

// Container for the navigation element
const SiteNavigationContainer = styled.div`
  border: 1px solid ${siteConstants.colorScheme.medium};
  height: calc(
    ${siteConstants.dimensions.siteHeader.height} +
      ${siteConstants.dimensions.global.spacing}
  );
  box-sizing: border-box;
  margin: -1px;
  position: relative;
  @media only screen and (max-width: ${siteConstants.dimensions.siteContent.mobileWidth}) {
    border: none;
    height: calc(${siteConstants.dimensions.siteHeader.height} + ${siteConstants.dimensions.global.spacing} + 20px);
  }
`;

// Container for the site title
const SiteTitleContainer = styled.div`
  padding: ${siteConstants.dimensions.global.spacing};
  position: static;
`;

// The site title, also acts as a hyperlink to the home page
const SiteTitle = styled(SiteLink)``;

// Props for navigation link
interface SiteNavigationLinkProps {
  linkText: string; // Link display text
  linkTo: string; // Link URL
}

// Navigation link element
function SiteNavigationLink(props: SiteNavigationLinkProps) {
  return (
    <SiteNavigationLinkContainer>
      [<SiteLink to={props.linkTo}>{props.linkText}</SiteLink>]
    </SiteNavigationLinkContainer>
  );
}

// Container for navigation link
const SiteNavigationLinkContainer = styled.li`
  margin-right: 12px;
`;

// Navigation link group container element
function SiteNavigationLinks() {
  return (
    <SiteNavigationLinksContainer>
      {siteConstants.pages.map((page, i) => (
        <SiteNavigationLink
          key={i}
          linkText={page.name}
          linkTo={"/" + page.to}
        />
      ))}
    </SiteNavigationLinksContainer>
  );
}

// Navigation link group container
const SiteNavigationLinksContainer = styled.ul`
  width: 100%;
  position: absolute;
  bottom: 0px;
  display: flex;
  padding: ${siteConstants.dimensions.global.spacing};
  list-style: none;
`;
