import PageBreak from "../components/_global/PageBreak";
import { ExternalLink, SectionHeader, SitePage, SiteTable, SiteTableData, SiteTableHeader, SiteTableRow, TextBlock } from "../styles/siteStyles";

// Credits page element
function Credits() {
  return (
    <SitePage>

      <SectionHeader>
        Credits
      </SectionHeader>

      <TextBlock>
        My thoughts and opinions are my own, and do not represent, and are not represented by, those who I have worked with in the past or currently have working relationships with. If you wish to work with me, please send me an email.
      </TextBlock>

      <SectionHeader>
        Programming
      </SectionHeader>

      <SiteTable>

        <SiteTableRow>
          <SiteTableHeader style={{ width: "30%" }}>
            Entity
          </SiteTableHeader>
          <SiteTableHeader>
            Role
          </SiteTableHeader>
        </SiteTableRow>

        <SiteTableRow>
          <SiteTableData>
            <ExternalLink 
              href="https://store.steampowered.com/app/1085660/Destiny_2/"
              target="_blank">
                Destiny 2
            </ExternalLink>
          </SiteTableData>
          <SiteTableData>
            Web technologies, microservices
          </SiteTableData>
        </SiteTableRow>

        <SiteTableRow>
          <SiteTableData>
            <ExternalLink 
              href="https://unity.com"
              target="_blank">
                Unity Technologies
            </ExternalLink>
          </SiteTableData>
          <SiteTableData>
            Online service integration, service porting
          </SiteTableData>
        </SiteTableRow>

        <SiteTableRow>
          <SiteTableData>
            <ExternalLink 
              href="https://store.steampowered.com/app/1161780/OTHER_Her_Loving_Embrace/"
              target="_blank">
                OTHER: Her Loving Embrace
            </ExternalLink>
          </SiteTableData>
          <SiteTableData>
            Gameplay programming assistance, minigames, inventory
          </SiteTableData>
        </SiteTableRow>

        <SiteTableRow>
          <SiteTableData>
            <ExternalLink 
              href="https://www.kickstarter.com/projects/1483273190/blue-omen-operation-a-stylish-and-hot-blooded-rpg"
              target="_blank">
                Blue Omen Operation
            </ExternalLink>
          </SiteTableData>
          <SiteTableData>
            Gameplay programming assistance
          </SiteTableData>
        </SiteTableRow>

        <SiteTableRow>
          <SiteTableData>
            <ExternalLink 
              href="https://www.youtube.com/watch?v=-CBwIXnbUuY"
              target="_blank">
                Oddity
            </ExternalLink>
          </SiteTableData>
          <SiteTableData>
            Dialogue programming, graphics & animation framework
          </SiteTableData>
        </SiteTableRow>

      </SiteTable>

      <SectionHeader>
        Music
      </SectionHeader>

      <SiteTable>

        <SiteTableRow>
          <SiteTableHeader style={{ width: "30%" }}>
            Entity
          </SiteTableHeader>
          <SiteTableHeader>
            Role
          </SiteTableHeader>
        </SiteTableRow>

        <SiteTableRow>
          <SiteTableData>
            <ExternalLink 
              href="https://avasdemon.com/2619.html"
              target="_blank">
                Ava's Demon
            </ExternalLink>
          </SiteTableData>
          <SiteTableData>
            Animation soundtrack - Rise and Shine
          </SiteTableData>
        </SiteTableRow>

        <SiteTableRow>
          <SiteTableData>
            <ExternalLink 
              href="https://store.steampowered.com/app/1012570/Knuckle_Sandwich/"
              target="_blank">
                Knuckle Sandwich
            </ExternalLink>
          </SiteTableData>
          <SiteTableData>
            Original soundtrack
          </SiteTableData>
        </SiteTableRow>

        <SiteTableRow>
          <SiteTableData>
            <ExternalLink 
              href="https://www.youtube.com/watch?v=j-6XrVK7P5E"
              target="_blank">
                an0nymooose
            </ExternalLink>
          </SiteTableData>
          <SiteTableData>
            Animation soundtrack - [SFM] Desert Danger
          </SiteTableData>
        </SiteTableRow>

        <SiteTableRow>
          <SiteTableData>
            <ExternalLink 
              href="https://www.youtube.com/watch?v=AWllh8pum0Y"
              target="_blank">
                Joel G
            </ExternalLink>
          </SiteTableData>
          <SiteTableData>
            Animation soundtrack - HANDS UP - Elevator
          </SiteTableData>
        </SiteTableRow>

        <SiteTableRow>
          <SiteTableData>
            <ExternalLink 
              href="https://www.newgrounds.com/portal/view/784646"
              target="_blank">
                ChipsGoWOAH
            </ExternalLink>
          </SiteTableData>
          <SiteTableData>
            Animation soundtrack - Week 7 Casting
          </SiteTableData>
        </SiteTableRow>

        <SiteTableRow>
          <SiteTableData>
            <ExternalLink 
              href="https://www.youtube.com/watch?v=YwkMVe4HsFY"
              target="_blank">
                whentheisdoes
            </ExternalLink>
          </SiteTableData>
          <SiteTableData>
            Animation soundtrack - DESTINY STAR DELIVERY
          </SiteTableData>
        </SiteTableRow>

        <SiteTableRow>
          <SiteTableData>
            <ExternalLink 
              href="https://deskpopmusic.bandcamp.com"
              target="_blank">
                DESKPOP
            </ExternalLink>
          </SiteTableData>
          <SiteTableData>
            Various compilation tracks
          </SiteTableData>
        </SiteTableRow>

        <SiteTableRow>
          <SiteTableData>
            <ExternalLink 
              href="https://sexytoadsandfrogsfriendcircle.bandcamp.com/"
              target="_blank">
                STAFFcirc
            </ExternalLink>
          </SiteTableData>
          <SiteTableData>
            Various compilation tracks
          </SiteTableData>
        </SiteTableRow>

        <SiteTableRow>
          <SiteTableData>
            <ExternalLink 
              href="https://hyperpoprecords.bandcamp.com/"
              target="_blank">
                HYPERPOP RECORDS
            </ExternalLink>
          </SiteTableData>
          <SiteTableData>
            Various compilation tracks
          </SiteTableData>
        </SiteTableRow>

      </SiteTable>

      <SectionHeader>
        Art
      </SectionHeader>
      <SiteTable>
        <SiteTableRow>
          <SiteTableData>
            Test
          </SiteTableData>
          <SiteTableData>
            Test2
          </SiteTableData>
        </SiteTableRow>
      </SiteTable>

    </SitePage>
  );
}
export default Credits;
