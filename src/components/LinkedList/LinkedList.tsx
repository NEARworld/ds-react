import styled from "@emotion/styled";
import { Fragment, useCallback, useEffect, useState } from "react";
import { SinglyLinkedList } from "../../ds/LinkedLists/SinglyLinkedList";
import { Node } from "../../ds/LinkedLists/Node";

type Operation = "append";
const operations: Operation[] = ["append"];

export const LinkedList = () => {
  const [Slist, setSlist] = useState(new SinglyLinkedList());
  const [value, setValue] = useState("");
  const [isOperationStarted, setIsOperationStarted] = useState(false);
  const [nodes, setNodes] = useState<Node[]>();

  useEffect(() => {
    const tempNodes = [];
    for (const node of Slist.traverse()) {
      tempNodes.push(node);
    }
    setNodes([...tempNodes]);
  }, [isOperationStarted]);

  console.log(Array.from(Slist.traverse()));

  const executeOperation = (operation: Operation) => {
    setIsOperationStarted(!isOperationStarted);
    if (value) {
      setSlist((prev) => {
        prev[operation](Number(value));
        return prev;
      });
      setValue("");
    }
  };

  const renderLinkedList = useCallback(() => {
    if (Slist.head === null) return null;
    if (nodes)
      return nodes.map((node, idx) => (
        <Fragment key={idx}>
          <StyledNode>
            <StyledData>{node.value}</StyledData>
            <StyledNext></StyledNext>
          </StyledNode>
          <span>{"->"}</span>
        </Fragment>
      ));
  }, [nodes]);

  return (
    <StyledContainer>
      <div>
        {operations.map((operation, idx) => (
          <StyledButton key={idx} onClick={() => executeOperation(operation)}>
            {operation}
          </StyledButton>
        ))}
      </div>
      <div>
        <span>데이터:</span>
        <StyledInput
          placeholder="데이터"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <StyledDisplay>
        <span>{"head ->"}</span>
        {renderLinkedList()}
        <span>null</span>
      </StyledDisplay>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: grid;
  gap: 5px;
`;
const StyledButton = styled.button``;
const StyledInput = styled.input``;
const StyledDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const StyledNode = styled.div`
  display: flex;
  width: 80px;
  height: 50px;
  border: 1px black solid;
`;
const StyledData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
`;
const StyledNext = styled.div`
  flex: 1;
  border-left: 1px black solid;
`;
