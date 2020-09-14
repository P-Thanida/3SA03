import React from "react";
import "./App.css";
import WordCard from "./WordCard";

function App() {

  return (
    <div className="App App-header">
        <WordCard value = "hello"/> {/* ส่ง props ที่มีค่าเป็น hello ส่งไปยัง Component Word Card */}
    </div>
  );

}

export default App;
