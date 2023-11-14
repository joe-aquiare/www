import styled from "styled-components";
import { SectionHeader, SitePage, TextBlock } from "../styles/siteStyles";

// Art page element
function Art() {
    return (
        <SitePage>
            <SectionHeader>Art</SectionHeader>
            <TextBlock>
                I have been creating digital art and illustrations for as long as I can remember. I have been known for my abstract and simple yet striking style. I strive to create distinct art that is both appealing and memorable, and moreover, makes people happy. If you'd like to work with me or commission an art piece, please send me an email.
            </TextBlock>
            <ArtFrame src="https://drive.google.com/file/d/1X5OiNq8_odEW5egQpHtylmXQ_fpRZRIB/preview" width="100%" height="385" allow="autoplay" />
            <ArtFrame src="https://drive.google.com/file/d/13wAZSqae7u4-7yQkIot5X7hqemrntvZr/preview" width="100%" height="385" allow="autoplay" />
            <ArtStack>
                <ArtFrame src="https://drive.google.com/file/d/1-svLvVfBRVKfe6sqnNk5Dc0O-6ZOpxUI/preview" width="100%" height="340" allow="autoplay" />
                <ArtFrame src="https://drive.google.com/file/d/11p8dj6BXj2-sUE9ikEwmcfzOIyN4SpSz/preview" width="100%" height="340" allow="autoplay" />
            </ArtStack>
        </SitePage>
    );
}
export default Art;

const ArtFrame = styled.iframe`
  border: none;  
`;

const ArtStack = styled.div`
    display: flex;
    width: 100%;
`