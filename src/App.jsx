import Home from "./pages/Home/Home";
import Two from "./pages/Home/Two";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout";

const App = () => {
  return (
    <div id="page">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/two" element={<Two />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
