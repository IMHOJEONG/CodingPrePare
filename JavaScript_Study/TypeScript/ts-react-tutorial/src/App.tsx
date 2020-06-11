import React from "react";
import "./App.css";
import Greetings from "./Greeting";
import Counter from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      {/* <Greetings name="Hello" onClick={onClick} /> */}
      {/* <Counter /> */}
      <MyForm onSubmit={onSubmit} />
      {/* <ReducerSample /> */}
    </>
  );
}

export default App;
