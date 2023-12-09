import "./App.css";
import CardDeteils from "./components/CardDeteils/CardDeteils";
import Catogory from "./components/Catogory/Catogory";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { item } from "./data";

import { useState } from "react";

function App() {
  const [data, SetData] = useState(item);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/catogory-menu"
            element={<Catogory itemProps={data} />}
          />
          <Route
            path="/item-details/:id"
            element={<CardDeteils itemProps={data} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
