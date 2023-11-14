import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import SiteNavigation from "./components/_global/SiteNavigation";
import SiteFooter from "./components/_global/SiteFooter";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import siteConstants from "./data/constants/siteConstants.json";
import blogEntries from "./pages/blog/BlogEntries";
import Music from "./pages/Music";
import Art from "./pages/Art";
import Credits from "./pages/Credits";

// Base app element
function App() {
  return (
    <>
      <SiteContainer>
        <SiteContent>
          <BrowserRouter>
            <SiteNavigation />
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/credits" element={<Credits />} />
              <Route path="/music" element={<Music />} />
              <Route path="/art" element={<Art />} />
              <Route path="/blog" element={<Blog />} />
              {
                // Map blog entires to their respective route
                blogEntries.map((entry: any, i: number) => {
                  return (
                    <Route
                      key={i}
                      path={"/blog/" + entry.route}
                      element={entry.element()}
                    />
                  );
                })
              }
            </Routes>
            <SiteFooter />
          </BrowserRouter>
          <SiteFooterSpacing />
        </SiteContent>
        <SiteBottomSpacing />
      </SiteContainer>
    </>
  );
}
export default App;

// Container for the site
const SiteContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${siteConstants.colorScheme.dark};
  left: 0;
  top: 0;
`;

// Container for site content
const SiteContent = styled.div`
  top: ${siteConstants.dimensions.siteContent.margin};
  color: ${siteConstants.colorScheme.light};
  max-width: ${siteConstants.dimensions.siteContent.width};
  border: 1px solid ${siteConstants.colorScheme.medium};
  box-shadow: -5px 5px 0px ${siteConstants.colorScheme.light};
  margin: 0 auto;
  display: block;
  position: relative;
  @media only screen and (max-width: ${siteConstants.dimensions.siteContent.mobileWidth}) {
    border: none;
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    top: 0;
  }
`;

// Spacing that comes after the site footer
const SiteFooterSpacing = styled.div`
  margin-top: 40px;
  @media only screen and (max-width: ${siteConstants.dimensions.siteContent.mobileWidth}) {
    margin-top: none;
  }
`;

const SiteBottomSpacing = styled.div`
  height: 55px;
`;
