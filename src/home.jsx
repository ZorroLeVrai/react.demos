import { Link } from "react-router-dom";
import menuList from "./menu";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        {menuList.map((it) => (
          <li key={it.path}>
            <Link to={it.path}>{it.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
