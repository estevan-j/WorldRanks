import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryPage from "../pages/CountryPage";
import HomePage from "../pages/HomePage";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/country/:name" element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
