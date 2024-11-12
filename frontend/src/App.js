import { Route, Routes } from "react-router-dom";
import {  Signup } from "./landing_page";
import Home from "./landing_page/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;