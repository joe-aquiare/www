import PageBreak from "../components/global/PageBreak";
import { ExternalLink, SectionHeader, SitePage, TextBlock } from "../styles/siteStyles";
import ReactPlayer from 'react-player'

// Music page element
function Music() {
  const playerWidth: string = "100%";
  const playerHeight: string = "160px";
  const playerOptions: any = {
    soundcloud: {
      options: {
        sharing: true,
        show_playcount: true,
      }
    }
  };
  return (
    <SitePage>
      <SectionHeader>Music</SectionHeader>
      <TextBlock>
        <ExternalLink href="https://soundcloud.com/pngsequence" target="_blank">SoundCloud</ExternalLink>&nbsp;
        <ExternalLink href="https://pngsequence.bandcamp.com" target="_blank">Bandcamp</ExternalLink>&nbsp;<br />
      </TextBlock>
      <TextBlock>
        I've been creating music in <ExternalLink href="https://www.image-line.com" target="_blank">FL Studio</ExternalLink> since 2011, and have been professionally composing game soundtracks since 2016. I also mix & master audio, and do foley/sound effects for games, animations, films, & more. If you'd like to work together, or would like to commission a musical piece or audio work, please send me an email.
      </TextBlock>
      <ReactPlayer 
        url='https://soundcloud.com/pngsequence/bicrescentic-cellulose-suite?show_playcount=true' 
        width={playerWidth}
        height={playerHeight}
        config={playerOptions}
      />
      <PageBreak />
      <ReactPlayer 
        url='https://soundcloud.com/pngsequence/blue-omen-operation-pepper-gulch-fight' 
        width={playerWidth}
        height={playerHeight}
        config={playerOptions}
      />
      <PageBreak />
      <ReactPlayer 
        url='https://soundcloud.com/pngsequence/there-are-no-tears-in-space' 
        width={playerWidth}
        height={playerHeight}
        config={playerOptions}
      />
      <PageBreak />
      <ReactPlayer 
        url='https://soundcloud.com/pngsequence/winds-of-dieat' 
        width={playerWidth}
        height={playerHeight}
        config={playerOptions}
      />
      <PageBreak />
      <ReactPlayer 
        url='https://soundcloud.com/pngsequence/jacobs-prayer' 
        width={playerWidth}
        height={playerHeight}
        config={playerOptions}
      />
      
    </SitePage>
  );
}
export default Music;
