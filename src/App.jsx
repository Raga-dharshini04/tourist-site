import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/welcome/Welcome";
import Destinations from "./components/Destinations/Destinations";
import VisitedPlaces from "./components/VisitedPlaces/VisitedPlaces";
import PlanTrip from "./components/PlanTrip/PlanTrip";
import Footer from "./components/Footer/Footer";
// app
import Kerala from "./Pages/Kerala/Kerala";
import Tn from "./Pages/TN/Tn";
import Goa from "./Pages/Goa/Goa";
import Pondi from "./Pages/Pondi/Pondi";
import Kashmir from "./Pages/Kashmir/Kashmir";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Welcome />
            <Destinations />
            <VisitedPlaces />
            <PlanTrip />
            <Footer />
          </>
        }
      />

      <Route path="/kerala" element={<Kerala />} />
      <Route path="/tamilnadu" element={<Tn />} />
      <Route path="/goa" element={<Goa />} />
      <Route path="/pondi" element={<Pondi />} />
      <Route path="/kashmir" element={<Kashmir />} />

    </Routes>
  );
}

export default App;