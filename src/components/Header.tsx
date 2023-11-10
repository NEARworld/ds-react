import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const menu = ["LinkedList"];

export const Header = () => {
  return (
    <StyledContainer>
      <StyledUl>
        {menu.map((item, idx) => (
          <StyledLi key={idx}>
            <Link to="linkedlist">{item}</Link>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledContainer>
  );
};

const StyledContainer = styled.header`
  display: flex;
`;
const StyledUl = styled.ul`
  list-style: none;
`;
const StyledLi = styled.li``;
