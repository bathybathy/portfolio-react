import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import GitProvider from "./context/GitContext";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import Repos from "./pages/repos/Repos";

const Router = () => {
  return (
    <BrowserRouter>
      <GitProvider>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/repos" element={<Repos />} />
        </Routes>
        <Footer />
      </GitProvider>
    </BrowserRouter>
  );
};

export default Router;
