import styled from "styled-components";
import CardWrapper from "./cardWrapper";

const StyledCard = styled.li`
  width: auto;
  background: #fff;
  color: black;
  padding: 0.75rem 1rem;
  text-transform: capitalize;
  margin-bottom: 12px;
  h1 {
    color: #666633;
    font-size: 16px;
  }
`;
const Card = ({ children, title }) => {
  return (
    <StyledCard>
      <h1>{title} </h1>
    </StyledCard>
  );
};

export default Card;
