import Demo1 from "./Demo1_Input_Text/Demo1";
import Demo2 from "./Demo2_ListGroup/Demo2";
import Demo3 from "./Demo3_Counter_UseState/Demo3";
import Demo4 from "./Demo4_Counter_UseReducer/Demo4";
import Demo5 from "./Demo5_Alert/Demo5";
import Demo6 from "./Demo6_Styles/Demo6";
import Demo7 from "./Demo7_Handling_Forms/Demo7";
import Demo8 from "./Demo8_SimpleFilteredList/Demo8";
import Demo9 from "./Demo9_ComponentFilteredList/Demo9";
import Demo10 from "./Demo10_FilteredList_GetData/Demo10";
import Demo10_2 from "./Demo10.2_FilteredList_UseEffect/Demo10_2";
import Demo11 from "./Demo11_FilteredList_UseEffect_CustomHooks/Demo11";
import Demo12 from "./Demo12_LocalStorage_UseEffect/Demo12";
import Demo13 from "./Demo13_UseContext_Example/Demo13";
import Demo14 from "./Demo14_IsLoading_UseEffect/Demo14";
import Demo15 from "./Demo15_Simple_UseEffect/Demo15";

class LinkInfo {
  constructor(path, title, component) {
    this.path = path;
    this.title = title;
    this.component = component;
  }
}

const menuList = [
  new LinkInfo("/Demo1", "Demo1_Input_Text", Demo1),
  new LinkInfo("/Demo2", "Demo2_ListGroup", Demo2),
  new LinkInfo("/Demo3", "Demo3_Counter_UseState", Demo3),
  new LinkInfo("/Demo4", "Demo4_Counter_UseReducer", Demo4),
  new LinkInfo("/Demo5", "Demo5_Alert", Demo5),
  new LinkInfo("/Demo6", "Demo6_Styles", Demo6),
  new LinkInfo("/Demo7", "Demo7_Handling_Forms", Demo7),
  new LinkInfo("/Demo8", "Demo8_SimpleFilteredList", Demo8),
  new LinkInfo("/Demo9", "Demo9_ComponentFilteredList", Demo9),
  new LinkInfo("/Demo10", "Demo10_FilteredList_GetData", Demo10),
  new LinkInfo("/Demo10_2", "Demo10.2_FilteredList_UseEffect", Demo10_2),
  new LinkInfo("/Demo11", "Demo11_FilteredList_UseEffect_CustomHooks", Demo11),
  new LinkInfo("/Demo12", "Demo12_LocalStorage_UseEffect", Demo12),
  new LinkInfo("/Demo13", "Demo13_UseContext_Example", Demo13),
  new LinkInfo("/Demo14", "Demo14_IsLoading_UseEffect", Demo14),
  new LinkInfo("/Demo15", "Demo15_Simple_UseEffect", Demo15),
];

export default menuList;