import styled from "styled-components";
import { Link } from "react-router-dom";
import siteConstants from "../data/constants/siteConstants.json";

// Inner-site links
export const SiteLink = styled(Link)`
  text-decoration: none !important;
  color: ${siteConstants.colorScheme.accent};
  opacity: 1 !important;
  transition: opacity 0.1s !important;
  &:hover {
    opacity: 0.7 !important;
    cursor: pointer !important;
  }
`;

// External links
export const ExternalLink = styled.a`
  text-decoration: none !important;
  color: ${siteConstants.colorScheme.accent};
  opacity: 1 !important;
  transition: opacity 0.1s !important;
  &:hover {
    opacity: 0.7 !important;
    cursor: pointer !important;
  }
`;

// Container element for a site page
export const SitePage = styled.div`
  padding: ${siteConstants.dimensions.global.spacing};
  height: 100%;
  @media only screen and (max-width: ${siteConstants.dimensions.siteContent.mobileWidth}) {
    padding-top: 0px;
  }
`;

// Container element for a site blog entry
export const SiteBlog = styled.div`
  padding: ${siteConstants.dimensions.global.spacing};
  height: 100%;
  @media only screen and (max-width: ${siteConstants.dimensions.siteContent.mobileWidth}) {
    padding-top: 0px;
  }
`;

// Block of text for any page
export const TextBlock = styled.p`
  margin: ${siteConstants.dimensions.global.spacing} 0px;
`;

// Section header for a blog
export const SectionHeader = styled.h1`
  font-size: 18px;
  font-weight: 400;
  line-height: -2px;
  margin-bottom: calc(${siteConstants.dimensions.global.spacing} - 10px);
`;

// Section header for a blog
export const BlogSectionHeader = styled.h1`
  font-size: 18px;
  font-weight: 400;
  line-height: -2px;
  margin-bottom: calc(${siteConstants.dimensions.global.spacing} - 10px);
`;

// Site-wide button
export const SiteButton = styled.button`
  min-width: 80px;
  height: 25px;
  border: 1px solid ${siteConstants.colorScheme.accent};
  background-color: transparent;
  margin-top: 2px;
  margin-bottom: ${siteConstants.dimensions.global.spacing};
  color: ${siteConstants.colorScheme.accent};
  padding-left: 10px;
  padding-right: 10px;

  transition: background-color 0.1s, color 0.1s;
  &:hover {
    background-color: ${siteConstants.colorScheme.accent};
    color: ${siteConstants.colorScheme.dark};
    cursor: pointer;
    font-weight: 800;
  }
`;

// Text highlight for inline code
export const TextHighlight = styled.span`
  background-color: ${siteConstants.colorScheme.accent};
  color: ${siteConstants.colorScheme.dark};
  padding: 0px 2px;
  border-radius: 3px;
`;

// List element
export const SiteList = styled.ol`
  padding-left: 22px;
  margin: 0;
`;

// Unordered list element
export const SiteUnorderedList = styled.ul`
  padding-left: 22px;
  margin: 0;
`;

// List item
export const SiteListItem = styled.li`
  padding-bottom: ${siteConstants.dimensions.global.spacing};

  &::marker {
    color: ${siteConstants.colorScheme.accent};
    padding: 0px 2px;
  }
`;

export const SiteTable = styled.table`
  width: 100%;
  border: 1px solid ${siteConstants.colorScheme.accent};
  margin-top: ${siteConstants.dimensions.global.spacing};
  margin-bottom: ${siteConstants.dimensions.global.spacing};
  border-collapse: collapse;
  box-shadow: -2px 2px 0px ${siteConstants.colorScheme.accent};
  margin-left: 1px;
`;

export const SiteTableBody = styled.tbody`

`;

export const SiteTableHeader = styled.th`
  padding: 3px;
  background-color: ${siteConstants.colorScheme.accent};
  color: ${siteConstants.colorScheme.dark};
  text-align: left;
  border: 1px solid ${siteConstants.colorScheme.accent};
  border-right: 1px solid ${siteConstants.colorScheme.dark};
  border-style: dashed;

  &:last-child {
    border-right: 1px solid ${siteConstants.colorScheme.accent};
  }
`;

export const SiteTableRow = styled.tr`
  border: 1px solid ${siteConstants.colorScheme.accent};
`;

export const SiteTableData = styled.td`
  padding: 3px;
  border-right: 1px solid ${siteConstants.colorScheme.accent};
  border: 1px solid ${siteConstants.colorScheme.accent};
`;