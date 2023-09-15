import styled from "styled-components";

const MyButton = styled.button`
  border-radius: 1rem;
  border: 1rem solid;
`;

export default function Button2({ children, onClickHandler }) {
  return (
    <MyButton style={{ color: "red" }} onClick={onClickHandler}>
      {children}
    </MyButton>
  );
}
