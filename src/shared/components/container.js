import styled from "styled-components";

const StyledContainer = styled.div`
  width: auto;
`;
const Container = ({ children }) => {
  return <StyledContainer> {children} </StyledContainer>;
};

export default Container;
