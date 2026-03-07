import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./styles/global.css";

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const navigate = (p) => setPage(p);

  return (
    <div className="site-wrapper">
      <Nav page={page} navigate={navigate} darkHero={page === "home"} />
      <main>
        {page === "home" && <Home navigate={navigate} />}
        {page === "about" && <About navigate={navigate} />}
        {page === "contact" && <Contact navigate={navigate} />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
