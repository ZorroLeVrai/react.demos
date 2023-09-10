import { Link } from "react-router-dom";

export default function Home() {
  const nbExercises = 7;
  const exerciseList = [...Array(nbExercises).keys()].map((i) => i + 1);

  return (
    <>
      <h1>Home page</h1>
      <ul>
        {exerciseList.map((index) => (
          <li key={index}>
            <Link to={`/Demo${index}`}>Demo {index}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
