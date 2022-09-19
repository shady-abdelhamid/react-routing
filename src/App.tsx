import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SkuRoutes from "./SkuRoutes";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <NavLink to="/sku" className={({ isActive }) => (isActive ? "app__navlink--active" : "")}>SKU</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sku/*" element={<SkuRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
