import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import GitProvider from "./context/GitContext";
import Contato from "./pages/contato/Contato";
import Home from "./pages/home/Home";
import Repos from "./pages/repos/Repos";

const Router = () => {
  return (
    <BrowserRouter>
      <GitProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos" element={<Repos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </GitProvider>
    </BrowserRouter>
  );
};

export default Router;
