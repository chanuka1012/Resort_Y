import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import ScrollToTop from "../ScrollToTop/ScrollToTop.jsx";
import OrderBar from "../OrderBar/OrderBar.jsx";
import WhatsAppFloat from "../WhatsAppFloat/WhatsAppFloat.jsx";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <OrderBar />
      <WhatsAppFloat />
    </>
  );
}