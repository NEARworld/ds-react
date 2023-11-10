import styled from "@emotion/styled";
import { FC } from "react";

type Props = {
  data: number;
  next: null | string;
};

export const Node: FC<Props> = ({ data, next }) => {
  return (
    <StyledContainer>
      <StyledData>{data}</StyledData>
      <StyledNext>{next}</StyledNext>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  width: 80px;
  height: 50px;
  border: 1px black solid;
`;
const StyledData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
`;
const StyledNext = styled.div`
  flex: 1;
  border-left: 1px black solid;
`;
