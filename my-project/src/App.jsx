import Header from "./components/Header"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Service from "./page/Service";
import Contact from "./page/Contact";
import Member from "./Page/Member";
import Event from "./page/Event";
import Login from "./page/Login";
function App() {
return(
  <div>
  <BrowserRouter>

  <Header/>
<main className="pt-16">

    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/member" element={<Member />} />
          <Route path="/event" element={<Event />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
</main>
  <Footer/>
  </BrowserRouter>

  </div>
)

 
}

export default App
