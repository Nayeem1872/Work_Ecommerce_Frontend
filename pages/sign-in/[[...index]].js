import { SignIn } from "@clerk/nextjs";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Set the container height to 100% of the viewport height */
`;

const SignInPage = () => {
  return (
    <CenteredContainer>
      <SignIn />
    </CenteredContainer>
  );
};

export default SignInPage;