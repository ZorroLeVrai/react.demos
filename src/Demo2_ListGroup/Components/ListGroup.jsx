import { useState } from "react";
import ListGroupItem from "./ListGroupItemBootstrap";
import styled from "styled-components";
import "./ListGroup.css";

//creates a new React component
const List = styled.ul`
  list-style: circle;
  padding: 10;
`;

export default function ListGroup({ items, heading, onSelectItem }) {
  const [lastClickedIndex, setLastClickedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List className="list-group">
        {items.map((item, index) => (
          <ListGroupItem
            key={index}
            text={item}
            highlighted={lastClickedIndex === index}
            onClickHandler={() => {
              setLastClickedIndex(index);
              onSelectItem(item);
            }}
          />
        ))}
      </List>
    </>
  );
}
