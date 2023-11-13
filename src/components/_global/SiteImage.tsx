import styled from "styled-components";

interface SiteImageProps {
    src: string
}

function SiteImage(props: SiteImageProps) {
    return (
        <SiteImageContainer>
            <SiteImageElement 
                onClick={(_) => {window.open(props.src)}}
                src={props.src} />
        </SiteImageContainer>
    );  
}
export default SiteImage;

const SiteImageContainer = styled.div`
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    display: grid;
`;

const SiteImageElement = styled.img`
    margin: 0 auto;
    max-width: 100%;
    opacity: 1;
    transition: opacity .1s;
    &:hover {
        opacity: .8;
        cursor: pointer;
    }
`;