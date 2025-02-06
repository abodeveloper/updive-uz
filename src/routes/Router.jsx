import Loader from "@/components/Loader";
import { Suspense, lazy, useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";

// Har bir sahifani yuklashda 1.6 soniya loader ko‘rsatadigan komponent
const withDelay = (Component) => {
  return function DelayedComponent() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1600); 
      return () => clearTimeout(timer);
    }, []);

    return isLoading ? <Loader /> : <Component />;
  };
};

// Lazy yuklangan sahifalar
const Home = withDelay(lazy(() => import("@/pages/home/Home")));
const Contacts = withDelay(lazy(() => import("@/pages/contacts/Contacts")));
const Services = withDelay(lazy(() => import("@/pages/services/Services")));
const Dlp = withDelay(lazy(() => import("@/pages/dlp/Dlp")));
const Siem = withDelay(lazy(() => import("@/pages/siem/Siem")));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products/dlp" element={<Dlp />} />
          <Route path="/products/siem" element={<Siem />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
