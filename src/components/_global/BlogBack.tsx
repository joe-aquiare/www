import { SiteButton } from "../../styles/siteStyles";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Back button navigation element for blog entries
function BlogBack() {
  const navigate = useNavigate();
  return (
    <BlogBackButtonContainer>
      <BlogBackButton
        onClick={() => {
          navigate("/blog");
        }}
      >
        ← Back
      </BlogBackButton>
    </BlogBackButtonContainer>
  );
}
export default BlogBack;

// Cotnainer for blog back button
const BlogBackButtonContainer = styled.div``;

// Button for blog back button
const BlogBackButton = styled(SiteButton)`
  padding-left: 2px;
`;
