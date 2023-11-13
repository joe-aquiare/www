import styled from "styled-components";
import { SiteButton } from "../../styles/siteStyles";
import { useNavigate } from "react-router-dom";

function BlogBack() {
    const navigate = useNavigate();
    return (
        <BlogBackButtonWrapper>
            <BlogBackButton onClick={() => {
                navigate("/blog");
            }}>
                ← Back
            </BlogBackButton>
        </BlogBackButtonWrapper>
    );
}
export default BlogBack;

const BlogBackButtonWrapper = styled.div`
    
`;

const BlogBackButton = styled(SiteButton)`
    padding-left: 2px;
`;