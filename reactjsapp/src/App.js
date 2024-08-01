import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import ForgotPasswordForm from "./components/ForgetPassword";
import VillaDetails from "./components/VillaDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicePage";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgotpassword" element={<ForgotPasswordForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path={`/villadetails/:list_id`} element={<VillaDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
