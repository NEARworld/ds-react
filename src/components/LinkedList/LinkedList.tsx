import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

export const LinkedList: FC<PropsWithChildren> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  display: flex;
  gap: 5px;
`;
