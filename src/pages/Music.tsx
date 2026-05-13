import PageBreak from "../components/_global/PageBreak";
import { ExternalLink, SectionHeader, SiteListItem, SitePage, SiteUnorderedList, TextBlock } from "../styles/siteStyles";
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
        I've been creating digital music for over 15 years, and have been professionally composing game soundtracks for 10. My DAW of choice is <ExternalLink href="https://www.image-line.com" target="_blank">FL Studio</ExternalLink>.
        <br />
        <br />
        For questions regarding:
        <br />
        <br />
        <SiteUnorderedList>
          <SiteListItem>Licensing</SiteListItem>
          <SiteListItem>Commissions</SiteListItem>
          <SiteListItem>Collaboration</SiteListItem>
          <SiteListItem>Workflow, software, etc.</SiteListItem>
        </SiteUnorderedList>
        <br />
        Please <ExternalLink href="/contact">contact me</ExternalLink> over email.
      </TextBlock>
      <br />
      <TextBlock>
        <i><b>Content creators:</b> If you wish to know if you have permission to use my music in your videos, the answer is usually yes; However, if you are monetizing your content, or if the content in question is an advertisement, please reach out to me to discuss licensing.
        
        If the track you're requesting is clearly a part of a different project's work (i.e., a game soundtrack, a film score, etc.), please do not use it without permission, as it may be under its own license. Thank you for understanding.</i>
      </TextBlock>
      <br />
      <TextBlock>
        <i><b>コンテンツ制作者の皆様へ：</b>ご自身の動画で私の楽曲を使用してもよいかお知りになりたい場合、通常は許可されています。ただし、コンテンツで収益化を行っている場合、または当該コンテンツが広告である場合は、ライセンスについてご相談いただくため、私までご連絡ください。ご要望の楽曲が、明らかに別のプロジェクト（ゲームのサウンドトラックや映画音楽など）の一部である場合は、独自のライセンスが適用されている可能性があるため、許可なく使用しないでください。ご理解のほどよろしくお願いいたします。</i>
      </TextBlock>
      
      {/*

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

      */}
      
    </SitePage>
  );
}
export default Music;
