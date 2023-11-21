import styled from "styled-components";

// Props for a site image
interface SiteImageProps {
  src: string;
  clickToOpen?: boolean;
}

// Site image element
function SiteImage(props: SiteImageProps) {
  return (
    <SiteImageContainer>
      {
        (props.clickToOpen) ? <SiteImageElement
          onClick={(_) => {
              window.open(props.src);
          }}
          src={props.src}
        /> : <SiteImageElementClickless
          src={props.src}
        />
      }
    </SiteImageContainer>
  );
}
export default SiteImage;

// Container for site image element
const SiteImageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  display: grid;
  box-shadow: none;
  
`;

// Site image
const SiteImageElement = styled.img`
  margin: 0 auto;
  max-width: 100%;
  opacity: 1;
  transition: opacity 0.1s;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

// Site image with no click through
const SiteImageElementClickless = styled.img`
  margin: 0 auto;
  max-width: 100%;
  opacity: 1;
`;