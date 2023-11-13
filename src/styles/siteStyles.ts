import styled from "styled-components";
import { Link } from "react-router-dom";
import siteConstants from "../data/constants/siteConstants.json"

export const SiteLink = styled(Link)`
    text-decoration: underline !important;
    color: ${siteConstants.colorScheme.accent} !important;
    opacity: 1 !important;
    transition: opacity .1s !important;
    &:hover {
        opacity: .7 !important;
        cursor: pointer !important;
    }
`;

export const ExternalLink = styled.a`
    text-decoration: underline !important;
    color: ${siteConstants.colorScheme.accent} !important;
    opacity: 1 !important;
    transition: opacity .1s !important;
    &:hover {
        opacity: .7 !important;
        cursor: pointer !important;
    }
`;

export const SitePage = styled.div`
    padding: ${siteConstants.dimensions.global.spacing};
    height: 100%;
`;

export const SiteBlog = styled.div`
    padding: ${siteConstants.dimensions.global.spacing};
    height: 100%;
`;

export const TextBlock = styled.p`
    margin: ${siteConstants.dimensions.global.spacing} 0px;
`;

export const BlogSection = styled.h1`
    font-size: 18px;
    font-weight: 400;
    line-height: -2px;
    margin-bottom: calc(${siteConstants.dimensions.global.spacing} - 10px);
`;

export const SiteButton = styled.button`
    min-width: 80px;
    height: 25px;
    border: 1px solid ${siteConstants.colorScheme.accent};
    background-color: transparent;
    margin-top: 2px;
    margin-bottom:  ${siteConstants.dimensions.global.spacing};
    color: ${siteConstants.colorScheme.accent};
    padding-left: 10px;
    padding-right: 10px;
    
    transition: background-color .1s, color .1s;
    &:hover {
        background-color: ${siteConstants.colorScheme.accent};
        color: ${siteConstants.colorScheme.dark};
        cursor: pointer;
        font-weight: 800;
    }
`;

export const TextHighlight = styled.span`
    background-color: ${siteConstants.colorScheme.accent};
    color: ${siteConstants.colorScheme.dark};
    padding: 0px 2px;
    border-radius: 3px;
`;

export const SiteList = styled.ol`
    padding-left: 22px;
    margin: 0;
`;

export const SiteUnorderedList = styled.ul`
    
`;

export const SiteListItem = styled.li`
    padding-bottom: ${siteConstants.dimensions.global.spacing};

    &::marker {
        color: ${siteConstants.colorScheme.accent};
        padding: 0px 2px;
    }
`;