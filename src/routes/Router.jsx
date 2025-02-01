import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "@/components/Loader";
import Contacts from "@/pages/contacts";

const Home = lazy(() => import("@/pages/home/Home"));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
