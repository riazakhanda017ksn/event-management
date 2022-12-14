import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Menu from "./component/Menu/Menu";
import Banner from "./component/Banner/Banner";

import { useState } from "react";
import Categories from "./component/Categories/Categories";
import Services from "./component/Services/Services";
import Sells from "./component/Sells/Sells";
import Reviews from "./component/Reviews/Reviews";
import Footer from "./component/Footer/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Banner />
      <Categories />
      <Services />
      <Sells />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
