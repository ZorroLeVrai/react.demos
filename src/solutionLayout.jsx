import { Outlet, Link } from "react-router-dom";

export default function SolutionLayout() {
  return (
    <>
      <div>
        <Link to="/">Back to menu</Link>
      </div>
      <Outlet />
    </>
  );
}
