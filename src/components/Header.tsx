import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  setDs: Dispatch<SetStateAction<Menu>>;
};

export type Menu = "LinkedList";

const menu: Menu[] = ["LinkedList"];

export const Header: FC<Props> = ({ setDs }) => {
  return (
    <StyledContainer>
      <StyledUl>
        {menu.map((item, idx) => (
          <StyledLi key={idx}>
            <Link to="linkedlist" onClick={() => setDs(item)}>
              {item}
            </Link>
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
