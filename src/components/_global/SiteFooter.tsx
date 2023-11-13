import styled from "styled-components";
import siteConstants from "../../data/constants/siteConstants.json"
import { ExternalLink } from "../../styles/siteStyles";

function SiteFooter() {
    return (
        <SiteFooterContainer>
            <SiteFooterLinks />
        </SiteFooterContainer>
    );
}
export default SiteFooter;

const SiteFooterContainer = styled.div`
    position: absolute;
    margin: -1px;
    bottom: -34px;
    border: 1px solid ${siteConstants.colorScheme.light};
    height: fit-content;
    width: 100%;
    text-align: center;
    padding-top: 4px;
    @media only screen and (max-width: ${siteConstants.dimensions.siteContent.mobileWidth}) {
        border: none;
    }
`;


function SiteFooterLinks() {
    return (
        <SiteFooterLinksContainer>
            {
                siteConstants.footerLinks.map(
                    (page, i) => (
                        <SiteFooterLink key={i} linkText={page.name} linkTo={page.to} />
                    )
                )
            }
        </SiteFooterLinksContainer>
    );
}

const SiteFooterLinksContainer = styled.ul`
    list-style: none;
    display: flex;
    margin: 0 auto;
    padding: ${siteConstants.dimensions.global.spacing};
    padding-top: calc(${siteConstants.dimensions.global.spacing} - 3px);
`;

interface SiteFooterLinkProps {
    linkText: string;
    linkTo: string;
}

function SiteFooterLink(props: SiteFooterLinkProps) {
    return (
        <SiteFooterLinkConainer>
            [<ExternalLink href={props.linkTo} target="_blank" rel='noreferrer'>
                {props.linkText}
            </ExternalLink>]
        </SiteFooterLinkConainer>
    );
}

const SiteFooterLinkConainer = styled.li`
    margin-right: 12px;
`;