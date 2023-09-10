export default function Alert({ children, isAlert }) {
  const className = isAlert ? "alert alert-primary" : "";
  return <div className={className}>{children}</div>;
}
