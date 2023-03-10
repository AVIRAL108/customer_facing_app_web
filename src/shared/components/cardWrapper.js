import styled from "styled-components";

const StyledCardWrapper = styled.ul`
  width: auto;
  list-style-type: none;
  margin: 0;
`;
const CardWrapper = ({ children }) => {
  return <StyledCardWrapper> {children} </StyledCardWrapper>;
};

export default CardWrapper;
