import ListGroup from "./Components/ListGroup";

const items = ["New York", "Tokyo", "London", "Paris"];

export default function Demo2() {
  return (
    <ListGroup
      items={items}
      heading="List Group example"
      onSelectItem={(item) => console.log(`Item ${item} clicked`)}
    ></ListGroup>
  );
}
