import styled from "styled-components";
import { ExternalLink, SectionHeader, SiteButton, SitePage } from "../styles/siteStyles";
import SiteImage from "../components/_global/SiteImage";
import siteConstants from "../data/constants/siteConstants.json";
import PageBreak from "../components/_global/PageBreak";

// Blog page element
function Projects() {
  return (
    <SitePage>
      <SectionHeader>Projects</SectionHeader>
      <div style={{height: "12px"}}/>
      <ProjectCard>
        <SectionHeader>Reflectile (Demo) - 2023</SectionHeader>
        <a href="https://store.steampowered.com/app/2389610/Reflectile/" target="_blank">
          <SiteImage src="/images/projects/reflectile_card.png" /> 
        </a>
        <ProjectDescription>
          <i>Reflectile</i> is a minimal precision-puzzle game that yearns for the early 2000's era of video games. It will test your ability to cut corners, squeeze through tight corridors, and make split-second inputs to reach the goal of each stage. You’ll encounter stages of varying difficulty, all with unique challenges and stylish designs to boot.
          <PageBreak />
          <i>Reflectile</i> successfully pledged <i>$18,103 USD</i> for development on <ExternalLink href="https://www.kickstarter.com/projects/pngsequence/reflectile-a-precision-puzzle-game" target="_blank">Kickstarter</ExternalLink> in early 2023.
          <PageBreak />
          Made in <b>GameMaker</b>.
        </ProjectDescription>
        <ProjectCardButtonContainer>
          <a href="https://store.steampowered.com/app/2389610/Reflectile/" target="_blank">
            <ProjectCardButton>
              View on <i>Steam</i> →
            </ProjectCardButton>
          </a>
          <a href="https://pngsequence.bandcamp.com/album/reflectile-demo-ost" target="_blank">
            <ProjectCardButton>
              Buy the <i>Soundtrack</i> →
            </ProjectCardButton>
          </a>
        </ProjectCardButtonContainer>
      </ProjectCard>
      <ProjectCard>
        <SectionHeader>Egg Squeeze - 2024</SectionHeader>
        <a href="https://store.steampowered.com/app/3229170/Egg_Squeeze/" target="_blank">
          <SiteImage src="/images/projects/eggsqueeze_card.png" /> 
        </a>
        <ProjectDescription>
          <i>Egg Squeeze</i> is a biological intuition test where you squeeze eggs for as long as you can without breaking them.
          <PageBreak />
          This game was a collaborative effort between myself, Jesse "FLOOR BABA" Martin, and Adam "Father P" Carey.
          <PageBreak />
          Made in <b>GameMaker</b>.
        </ProjectDescription>
        <ProjectCardButtonContainer>
          <a href="https://store.steampowered.com/app/3229170/Egg_Squeeze/" target="_blank">
            <ProjectCardButton>
              View on <i>Steam</i> →
            </ProjectCardButton>
          </a>
          <a href="https://pngsequence.bandcamp.com/album/egg-squeeze-original-soundtrack" target="_blank">
            <ProjectCardButton>
              Buy the <i>Soundtrack</i> →
            </ProjectCardButton>
          </a>
        </ProjectCardButtonContainer>
      </ProjectCard>
    </SitePage>
  );
}
export default Projects;

const ProjectCard = styled.div`
  width: calc(100% - ${siteConstants.dimensions.global.spacing} * 2 - 5);
  padding: ${siteConstants.dimensions.global.spacing};
  border: 1px solid ${siteConstants.colorScheme.accent};
  box-shadow: -5px 5px 0px ${siteConstants.colorScheme.accent};
  margin-left: 5px;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 5px;
  }
  ${SectionHeader} {
    padding-bottom: ${siteConstants.dimensions.global.spacing};
  }
`;

const ProjectDescription = styled.p`
  padding-top: ${siteConstants.dimensions.global.spacing};
`;

const ProjectCardButtonContainer = styled.div`
  padding-top: ${siteConstants.dimensions.global.spacing};
  display: flex;
  gap: ${siteConstants.dimensions.global.spacing};
  a {
    flex-grow: 1;
  }
`;

const ProjectCardButton = styled(SiteButton)`
  flex-grow: 1;
  width: 100%;
  padding-top: 2px;
  margin-bottom: 0px;
  cursor: pointer;
  border: 1px solid ${siteConstants.colorScheme.accent};
  background-color: ${siteConstants.colorScheme.dark};
  color: ${siteConstants.colorScheme.accent};
`;