import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import SiteNavigation from "./components/_global/SiteNavigation"
import SiteFooter from "./components/_global/SiteFooter";
import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";
import BlogPage from "./pages/blog/BlogPage";
import siteConstants from "./data/constants/siteConstants.json"
import { blogEntries } from "./data/content/blog";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <>
      <SiteContainer>
        <SiteContent>
          <BrowserRouter>
            <SiteNavigation />
            <Routes>
              <Route index path="/" element={<HomePage    /> } />
              <Route path="/home"    element={<HomePage    /> } />
              <Route path="/contact" element={<ContactPage /> } />
              <Route path="/blog"    element={<BlogPage    /> } />
              {
                blogEntries.map((entry, i) => {
                  return <Route 
                    key={i}
                    path={"/blog/" + entry.route}    
                    element={entry.element()}
                    />
                })
              }
            </Routes>
            <SiteFooter />
          </BrowserRouter>
        </SiteContent>
        <SiteFooterSpacing />
      </SiteContainer>
    </>
  )
}
export default App;

const SiteContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${siteConstants.colorScheme.dark};
  left: 0;
  top: 0;
`;

const SiteContent = styled.div`
  top: ${siteConstants.dimensions.siteContent.margin};
  color: ${siteConstants.colorScheme.light};
  max-width: ${siteConstants.dimensions.siteContent.width};
  min-height: ${siteConstants.dimensions.siteContent.height};
  border: 1px solid ${siteConstants.colorScheme.light};
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

const SiteFooterSpacing = styled.div`
  height: 60px;
  width: 100%;
  margin-top: ${siteConstants.dimensions.siteContent.margin};
  @media only screen and (max-width: ${siteConstants.dimensions.siteContent.mobileWidth}) {
    margin-top: none;
  }
`;