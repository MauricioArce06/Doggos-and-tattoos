import Home from "./views/Home";
import Header from "./components/Primary/header/header";
import "./reset.css";
import CustomBody from "./Styles/GeneralStyes";
import { Route, Routes } from "react-router-dom";
import Mis_Turnos from "./views/Mis_Turnos";
import Schedule from "./views/Schedule";
import Galery from "./views/Galery";
import About_us from "./views/About-us";
import Errorpage from "./views/Errorpage";
import Footer from "./components/Primary/Footer/footer";

function App() {
  return (
    <CustomBody>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Mis_Turnos" element={<Mis_Turnos />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Galery" element={<Galery />} />
        <Route path="/About-us" element={<About_us />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      {/* <Mis_Turnos /> */}
      {/* <Register /> */}
      <Footer />
    </CustomBody>
  );
}

export default App;
