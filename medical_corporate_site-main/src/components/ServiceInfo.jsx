import React from 'react';
import { MDContentBox } from "@AgileVentures/medical_ui_library";
import { useTranslation } from "react-i18next";
// Assuming getConfigForHostname and hostnameMapping are exported from the configuration file
// import { getConfigForHostname, currentHostname } from './yourConfigFile';
import { getConfigForHostname , currentHostname} from '../services/hostService';
const ServiceInfo = () => {
  const { t, i18n } = useTranslation();
  
  // Use currentHostname to get the hostname being used
  // i18n.language gives you the current language used in the application
  const siteConfig = getConfigForHostname(currentHostname, i18n.language);

  // Now you can access site-specific and language-specific data
  // For example, to get the title based on the current hostname and language
  const title = siteConfig.title;
  const contentKey = siteConfig.contentKey;

  // Assuming you have translation keys set up to use with i18next for your content
  const content = t(`custom_content.${contentKey}`, {
    returnObjects: true,
    defaultValue: "Default content if key is missing",
  });

  return (
    <MDContentBox>
      <h1>{title}</h1>
      <p>{content.description}</p> {/* Example of accessing a property */}
    </MDContentBox>
  );
};

export default ServiceInfo;
