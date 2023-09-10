import styled from "styled-components";

const MyButton = styled.button`
  border-radius: 1rem;
`;

export default function Button2({
  children,
  style = "primary",
  onClickHandler,
}) {
  return (
    <MyButton className={style} onClick={onClickHandler}>
      {children}
    </MyButton>
  );
}
