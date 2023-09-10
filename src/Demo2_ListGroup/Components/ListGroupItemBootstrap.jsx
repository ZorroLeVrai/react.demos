export default function ListGroupItemBootstrap(props) {
  const { text, highlighted, onClickHandler } = props;
  const classNameContent = highlighted
    ? "list-group-item active"
    : "list-group-item";

  return (
    <li className={classNameContent} onClick={onClickHandler}>
      {text}
    </li>
  );
}
