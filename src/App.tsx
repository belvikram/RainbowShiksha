import { Route, HashRouter as Router, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Donations from "./pages/Donations";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import GetInvolved from "./pages/GetInvolved";
import Header from "./components/Header";
import Home from "./pages/Home";
import Impact from "./pages/Impact";
import OurStory from "./pages/OurStory";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/events" element={<Events />} />
            <Route path="/donate" element={<Donations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/impact" element={<Impact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
