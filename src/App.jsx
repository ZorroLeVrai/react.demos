import { Route, Routes } from "react-router-dom";
import Home from "./home";
import SolutionLayout from "./solutionLayout";
import NotFound from "./NotFound";
import Demo1 from "./Demo1_Input_Text/Demo1";
import Demo2 from "./Demo2_ListGroup/Demo2";
import Demo3 from "./Demo3_Counter_UseState/Demo3";
import Demo4 from "./Demo4_Counter_UseReducer/Demo4";
import Demo5 from "./Demo5_Alert/Demo5";
import Demo6 from "./Demo6_Styles/Demo6";
import Demo7 from "./Demo7_Handling_Forms/Demo7";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<SolutionLayout />}>
        <Route path="/Demo1" element={<Demo1 />} />
        <Route path="/Demo2" element={<Demo2 />} />
        <Route path="/Demo3" element={<Demo3 />} />
        <Route path="/Demo4" element={<Demo4 />} />
        <Route path="/Demo5" element={<Demo5 />} />
        <Route path="/Demo6" element={<Demo6 />} />
        <Route path="/Demo7" element={<Demo7 />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
