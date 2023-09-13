import React, { useState } from "react";
import { FormRefHook, FormStateHook, FormFormHook, FormHookZod } from "./Forms";

export default function Demo7() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const linkStyle = {
    textDecoration: "underline",
    cursor: "pointer",
    color: "blue",
  };

  const handleSelectForm = (e) => {
    const selectedFormId = e.target.dataset?.id;
    if (!selectedFormId) return;

    setSelectedIndex(parseInt(selectedFormId));
  };

  const formComponents = [
    FormRefHook,
    FormStateHook,
    FormFormHook,
    FormHookZod,
  ];

  return (
    <>
      <span data-id="0" style={linkStyle} onClick={handleSelectForm}>
        useRef Form
      </span>
      <span data-id="1" style={linkStyle} onClick={handleSelectForm}>
        useState Form
      </span>
      <span data-id="2" style={linkStyle} onClick={handleSelectForm}>
        useForm hook
      </span>
      <span data-id="3" style={linkStyle} onClick={handleSelectForm}>
        useForm & validation
      </span>

      {React.createElement(formComponents[selectedIndex])}
    </>
  );
}
