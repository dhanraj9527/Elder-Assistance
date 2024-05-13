import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer } from "react-toastify";
import Home from "./components/dash/Home";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/reusable/PageNotFound";
import Talk from "./components/dash/Talk";
import ScheduleAppointment from "./components/dash/ScheduleAppointment";
import BMICalculator from "./components/dash/BMICalculator";
import DietAndTips from "./components/dash/DietAndTips";
import Grocery from "./components/dash/Grocery"
import Reviews from "./components/dash/Reviews";
import AboutUs from "./components/dash/AboutUs";
import ContactPage from "./components/dash/ContactPage";
import Medicine from "./components/dash/Medicine";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />}>
          <Route path="talk" element={<Talk />} />
          <Route path="diet-and-tips" element={<DietAndTips />} />
          <Route
            path="schedule-appointment"
            element={<ScheduleAppointment />}
          />
          <Route path="bmi" element={<BMICalculator />} />
          <Route path="Medicine" element={<Medicine />} />
          <Route path="grocery" element={<Grocery />} />
          <Route path="ContactPage" element={<ContactPage/>} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="Aboutus" element={<AboutUs />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
