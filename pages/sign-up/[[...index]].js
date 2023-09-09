import { SignUp } from "@clerk/nextjs";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Set the container height to 100% of the viewport height */
`;
 
export default function Page() {
  return (
  <CenteredContainer>

<SignUp />;
  </CenteredContainer>
  )
}