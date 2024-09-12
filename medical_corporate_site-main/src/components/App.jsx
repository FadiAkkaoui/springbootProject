/* eslint-disable no-unused-vars */
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import {
  getConfigForHostname,
  isAHeadOfficeSite,
} from "../services/hostService";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturesList from "./FeaturesList";
import Services from "./Services";
import ScrollToTopButton from "./ScrollToTopButton";
import MapContainer from "./MapContainer";
import Facilities from "./Facilities";
import { Suspense, lazy } from "react";
import { Spinner } from "@chakra-ui/react";

const Footer = lazy(() => import("./Footer"));

const App = () => {
  const { i18n } = useTranslation();
  const hostname = window.location.hostname;
  const language = i18n.language;
  const { title, contentKey } = getConfigForHostname(hostname, language);
  const isHeadOfficeSite = isAHeadOfficeSite();

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header></Header>
      <HeroSection />
        <>
          <Facilities />
          <FeaturesList customKey={contentKey} />
          <Services />
          <MapContainer />
          <Suspense fallback={<Spinner />}>
            <Footer />
          </Suspense>
        </>
      <ScrollToTopButton />
    </HelmetProvider>
  );
};

export default App;
