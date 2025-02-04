import Loader from "@/components/Loader";
import Contacts from "@/pages/contacts";
import ProductPage from "@/pages/product-page";
import Services from "@/pages/services";
import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Home = lazy(() => import("@/pages/home/Home"));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products/:product" element={<ProductPage />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
