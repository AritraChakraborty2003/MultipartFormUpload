/*import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cms from "./components/Cms";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cms />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
