import "./App.css";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreContextProvider, storeContext } from "./contxt+reducer/Context";
import { useContext } from "react";

function App() {
  return (
    <StoreContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
      </Router>
    </StoreContextProvider>
  );
}

export default App;
