//TODO: this needs to be simplified
const hostnameMapping = {
  "medical24.se": {
    head_office: true,
    production: false,
    en: {
      contentKey: "generalInfoContent",
      title: "Medical Healthcare Centre",
    },
    sv: {
      contentKey: "generalInfoContent",
      title: "Medical Vårdcentral",
    },
    pl: {
      contentKey: "generalInfoContent",
      title: "Medical Vårdcentral",
    },
  },
  "medicalvc.se": {
    head_office: true,
    production: false,
    en: {
      contentKey: "vcInfoContent",
      title: "Medical Healthcare Centre - VC",
    },
    sv: {
      contentKey: "vcInfoContent",
      title: "Medical Vårdcentral - VC",
    },
    pl: {
      contentKey: "vcInfoContent",
      title: "Medical Vårdcentral",
    },
  },
  "medicalhovas.se": {
    head_office: false,
    production: false,
    en: {
      contentKey: "hovasInfoContent",
      title: "Medical Healthcare Centre - Hovås",
    },
    sv: {
      contentKey: "hovasInfoContent",
      title: "Medical Vårdcentral - Hovås",
    },
    pl: {
      contentKey: "hovasInfoContent",
      title: "Medical Vårdcentral",
    },
  },
  "medicalbohus.se": {
    head_office: false,
    production: true,
    slug_1177: "Medical-Vardcentral-och-BVC-Bohus",
    coords: {
      lat: 57.85159,
      lng: 12.01635,
    },
    main_officer: "Susanne Slosar",
    en: {
      contentKey: "bohusInfoContent",
      title: "Medical Healthcare Centre - Bohus",
    },
    sv: {
      contentKey: "bohusInfoContent",
      title: "Medical Vårdcentral - Bohus",
    },
    pl: {
      contentKey: "bohusInfoContent",
      title: "Medical Vårdcentral",
    },
  },
  "medicalgardsten.se": {
    head_office: false,
    production: true,
    slug_1177: "Medical-Vardcentral-och-BVC-Gardsten-Angered",
    coords: {
      lat: 57.80409,
      lng: 12.03144,
    },
    main_officer: "Susanne Slosar",
    en: {
      contentKey: "gardstenInfoContent",
      title: "Medical Healthcare Centre - Gårdsten",
    },
    sv: {
      contentKey: "gardstenInfoContent",
      title: "Medical Vårdcentral - Gårdsten",
    },
    pl: {
      contentKey: "gardstenInfoContent",
      title: "Medical Vårdcentral",
    },
  },
  "medicalkortedala.se": {
    head_office: false,
    production: true,
    slug_1177: "Medical-BVC-Kortedala",
    coords: {
      lat: 57.75151,
      lng: 12.03239,
    },
    main_officer: "Lina Gurthe",
    en: {
      contentKey: "kortedalaInfoContent",
      title: "Medical Healthcare Centre - Kortedala",
    },
    sv: {
      contentKey: "kortedalaInfoContent",
      title: "Medical Vårdcentral - Kortedala",
    },
    pl: {
      contentKey: "kortedalaInfoContent",
      title: "Medical Vårdcentral",
    },
    "medicaljohanneberg.se": {
      head_office: false,
      production: false,
      en: {
        contentKey: "johannebergInfoContent",
        title: "Medical Healthcare Centre - Johanneberg",
      },
      sv: {
        contentKey: "johannebergInfoContent",
        title: "Medical Vårdcentral - Johanneberg",
      },
      pl: {
        contentKey: "johannebergInfoContent",
        title: "Medical Vårdcentral",
      },
    },
    "medicalpartille.se": {
      head_office: false,
      production: false,
      en: {
        contentKey: "partilleInfoContent",
        title: "Medical Healthcare Centre - Partille",
      },
      sv: {
        contentKey: "partilleInfoContent",
        title: "Medical Vårdcentral - Partille",
      },
      pl: {
        contentKey: "partilleInfoContent",
        title: "Medical Vårdcentral",
      },
    },
  },
  // Add additional hostnames and their configurations here
};

const domainUnderTest = "nyalegehuset.se";
export const currentHostname = import.meta.env.PROD
  ? window.location.hostname
  : domainUnderTest;

// export const currentHostname = window.location.hostname;

// Function to check if a site is a production site
export function isAProductionSite() {
  return productionSites[currentHostname]; //TODO: Check this in production
}

// Function to check if a site is a head office site
export function isAHeadOfficeSite() {
  return headOfficeSites[currentHostname] || currentHostname === "localhost"; //TODO: Check this in production
}

export const productionSites = Object.keys(hostnameMapping).reduce(
  (acc, key) => {
    if (hostnameMapping[key].production) {
      acc[key] = hostnameMapping[key];
    }
    return acc;
  },
  {}
);

export const headOfficeSites = Object.keys(hostnameMapping).reduce(
  (acc, key) => {
    if (hostnameMapping[key].head_office) {
      acc[key] = hostnameMapping[key];
    }
    return acc;
  },
  {}
);

export function getSiteData(hostname, language, t, additionalFields = []) {
  const siteData = productionSites[hostname];
  const localizedData = siteData[language]; // Accessing the language-specific data
  const centerData = t(`custom_content.${localizedData.contentKey}`, {
    returnObjects: true,
  });

  const mergedData = {
    ...siteData,
    ...localizedData,
    ...centerData,
    url: `https://${hostname}`,
    host: hostname,
    // Include additional fields specified in the additionalFields array
    ...additionalFields.reduce((acc, field) => {
      acc[field] = siteData[field] || localizedData[field] || centerData[field];
      return acc;
    }, {}),
  };

  return mergedData;
}

export const getConfigForHostname = (hostname, language) => {
  const defaultConfig = hostnameMapping["medical24.se"];
  const configForHost = hostnameMapping[hostname] || defaultConfig;
  const configForLanguage = configForHost[language] || configForHost["sv"]; // Default fallback to Swedish
  return { ...configForHost, ...configForLanguage };
};
