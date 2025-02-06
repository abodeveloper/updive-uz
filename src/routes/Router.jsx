import Loader from "@/components/Loader";
import { Suspense, lazy, useEffect, useLayoutEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

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
const Contacts = lazy(() => import("@/pages/contacts/Contacts"));
const Services = lazy(() => import("@/pages/services/Services"));
const Dlp = lazy(() => import("@/pages/dlp/Dlp"));
const Siem = lazy(() => import("@/pages/siem/Siem"));

const AppRouter = () => {
  const location = useLocation();

  useEffect(() => {
    // Sahifa renderdan oldin scrollni 0,0 ga o'rnating
    window.scrollTo(0, 0);
  }, [location]);

  return (
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
  );
};

export default AppRouter;
