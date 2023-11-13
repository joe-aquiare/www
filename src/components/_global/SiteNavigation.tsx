import { SiteLink } from "../../styles/siteStyles";
import styled from "styled-components";
import { headerContent } from "../../pages/home/_content"
import siteConstants from "../../data/constants/siteConstants.json"

function SiteNavigation() {
    return (
        <SiteNavigationContainer>
            <SiteTitleContainer>
                <SiteTitle to="/home">{headerContent.pageTitle}</SiteTitle>
            </SiteTitleContainer>
            <SiteNavigationLinks />
        </SiteNavigationContainer>
    );
}
export default SiteNavigation;

const SiteNavigationContainer = styled.div`
    border: 1px solid ${siteConstants.colorScheme.light};
    height: calc(${siteConstants.dimensions.siteHeader.height} + ${siteConstants.dimensions.global.spacing});
    box-sizing: border-box;
    margin: -1px;
    position: relative;
    @media only screen and (max-width: ${siteConstants.dimensions.siteContent.mobileWidth}) {
        border: none;
        height: calc(${siteConstants.dimensions.siteHeader.height} + ${siteConstants.dimensions.global.spacing} + 20px);
    }
`;

const SiteTitleContainer = styled.div`
    padding: ${siteConstants.dimensions.global.spacing};
    position: static;
`;

const SiteTitle = styled(SiteLink)`
    
`;

interface SiteNavigationLinkProps {
    linkText: string;
    linkTo: string;
}

function SiteNavigationLink(props: SiteNavigationLinkProps) {
    return (
        <SiteNavigationLinkContainer>
            [<SiteLink to={props.linkTo}>
                {props.linkText}
            </SiteLink>]
        </SiteNavigationLinkContainer>
    );
}

const SiteNavigationLinkContainer = styled.li`
    margin-right: 12px;
`;

function SiteNavigationLinks() {
    return (
        <SiteNavigationLinksContainer>
            {
                siteConstants.pages.map(
                    (page, i) => (
                        <SiteNavigationLink key={i} linkText={page.name} linkTo={"/" + page.to} />
                    )
                )
            }
        </SiteNavigationLinksContainer>
    );
}

const SiteNavigationLinksContainer = styled.ul`
    width: 100%;
    position: absolute;
    bottom: 0px;
    display: flex;
    padding: ${siteConstants.dimensions.global.spacing};
    list-style: none;
`;