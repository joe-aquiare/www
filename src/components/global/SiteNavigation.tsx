import { SiteLink } from "../../styles/siteStyles";
import styled from "styled-components";
import siteConstants from "../../data/constants/siteConstants.json";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

// Site navigation component
function SiteNavigation() {
  const location = useLocation();
  return (
    <SiteNavigationContainer>
      <SiteTitleContainer>
        <SiteTitle to="/home">joeaquiare.site<SiteTitlePath>{location.pathname}</SiteTitlePath></SiteTitle>
      </SiteTitleContainer>
      <SiteNavigationLinks />
    </SiteNavigationContainer>
  );
}
export default SiteNavigation;

const SiteTitlePath = styled.span`
  opacity: .5;
`;

// Container for the navigation element
const SiteNavigationContainer = styled.div`
  user-select: none;
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
    height: fit-content;
  }
`;

// Container for the site title
const SiteTitleContainer = styled.div`
  padding: ${siteConstants.dimensions.global.spacing};
  position: static;
  @media only screen and (max-width: ${siteConstants.dimensions.siteContent.mobileWidth}) {
    margin-top: ${siteConstants.dimensions.global.spacing};
    padding-bottom: 0px;
    padding-top: 0px;
  }
`;

// The site title, also acts as a hyperlink to the home page
const SiteTitle = styled(SiteLink)`
  user-select: none;
`;

// Props for navigation link
interface SiteNavigationLinkProps {
  linkText: string; // Link display text
  linkTo: string; // Link URL
}

// Navigation link element
function SiteNavigationLink(props: SiteNavigationLinkProps) {
  return (
    <SiteNavigationLinkContainer>
      <SiteNavigationLinkBracket>[</SiteNavigationLinkBracket>
      <NavigationSiteLink to={props.linkTo}>{props.linkText}</NavigationSiteLink>
      <SiteNavigationLinkBracket>]</SiteNavigationLinkBracket>
    </SiteNavigationLinkContainer>
  );
}

const SiteNavigationLinkBracket = styled.span`
  color: ${siteConstants.colorScheme.light};
  @media only screen and (max-width: ${siteConstants.dimensions.siteContent.mobileWidth}) {
    display: none;
  }  
`;

// Container for navigation link
const SiteNavigationLinkContainer = styled.li`
   margin-right: 12px;
`;

const NavigationSiteLink = styled(SiteLink)`
  width: 100%;
  @media only screen and (max-width: ${siteConstants.dimensions.siteContent.mobileWidth}) {
    background-color: ${siteConstants.colorScheme.accent};
    margin-bottom: ${siteConstants.dimensions.global.spacing};
    padding: ${siteConstants.dimensions.global.spacing};
    width: calc(100% - ${siteConstants.dimensions.global.spacing} * 4);
    cursor: pointer;
    display: contents;
    ${SiteLink} {
      color: ${siteConstants.colorScheme.dark} !important;
    }
  } 
`;

// Navigation link group container element
function SiteNavigationLinks() {

  const [open, setOpen] = useState(window.innerWidth > parseInt(siteConstants.dimensions.siteContent.mobileWidth));
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
      window.addEventListener("resize", () => {
        autoToggleState(window.innerWidth);
      });
      return () => {
          window.removeEventListener("resize", () => {
            autoToggleState(window.innerWidth);
          })
      }
  }, []);

  var autoToggleState = (newWidth: number) => {
    setScreenSize(newWidth);
    setOpen(newWidth > parseInt(siteConstants.dimensions.siteContent.mobileWidth));
  };

  return (
    <SiteNavigationLinksContainer>
      <SiteNavigationMobileToggle
          onClick={() => {
            setOpen(!open);
          }}
      >
        ☰
      </SiteNavigationMobileToggle>
      <SiteNavigationMobileToggleContainer style={{ display: open ? "inherit" : "none" }}>
        {siteConstants.pages.map((page, i) => (
          <div
            key={i}
            onClick={() => {
              if(screenSize <= parseInt(siteConstants.dimensions.siteContent.mobileWidth)) {
                setOpen(false);
              }
            }}
          >
          <SiteNavigationLink
            linkText={page.name}
            linkTo={"/" + page.to}
          />
          </div>
        ))}
        <SiteNavigationMobileSpacer/>
      </SiteNavigationMobileToggleContainer>
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
  @media only screen and (max-width: ${siteConstants.dimensions.siteContent.mobileWidth}) {
    display: block;
    position: static;
    text-align: center;
    align-content: center;
    margin: 0 auto;
  }
`;

const SiteNavigationMobileToggleContainer = styled.div`
  transition: display .1s;
`;

const SiteNavigationMobileSpacer = styled.div`
 @media only screen and (max-width: ${siteConstants.dimensions.siteContent.mobileWidth}) {
    width: 100%;
    margin-bottom: 3px;
  }
`;

const SiteNavigationMobileToggle = styled.div`
  display: none;
  @media only screen and (max-width: ${siteConstants.dimensions.siteContent.mobileWidth}) {
    display: inherit;
    font-size: 22px;
    position: absolute;
    left: calc(100% - 35px);
    top: -15px;
    padding: ${siteConstants.dimensions.global.spacing};
    cursor: pointer;
  }
`;