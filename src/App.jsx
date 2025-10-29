import { useState } from "react";
import "./App.css";
import { ListPosts } from "./components/ListPosts";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-purple-500">
        Mi primer ejemplo con AXIOS
      </h1>
      <ListPosts />
    </>
  );
}

export default App;