import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import GitProvider from "./context/GitContext";
import Home from "./pages/home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <GitProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </GitProvider>
    </BrowserRouter>
  );
};

export default Router;
