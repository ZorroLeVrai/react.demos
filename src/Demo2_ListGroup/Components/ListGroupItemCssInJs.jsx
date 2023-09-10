import styled from "styled-components";

const ListItem = styled.li`
  background: ${(props) => (props.active ? "blue" : "none")};
`;

export default function ListGroupItemCssInJs(props) {
  const { text, highlighted, onClickHandler } = props;

  return (
    <ListItem active={highlighted} onClick={onClickHandler}>
      {text}
    </ListItem>
  );
}
