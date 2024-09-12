/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import logo1177 from "../assets/1177_small.webp";
import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

import {
  getConfigForHostname,
  productionSites,
  currentHostname,
  getSiteData,
} from "../services/hostService";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const { contentKey, slug_1177 } = getConfigForHostname(
    currentHostname,
    language
  );
  const customData = t(`custom_content.${contentKey}`, {
    returnObjects: true,
  });

  const additionalCentrasData = Object.keys(productionSites)
    .filter((center) => center !== currentHostname)
    .map((center) => {
      const siteData = productionSites[center];
      const localizedData = siteData[language]; // Accessing the language-specific data
      const centerData = t(`custom_content.${localizedData.contentKey}`, {
        returnObjects: true,
      });

      return {
        ...centerData,
        url: `https://${center}`,
        slug_1177: siteData.slug_1177, // Access slug_1177 from the main object
        coords: siteData.coords, // Include coordinates
      };
    });
  return (
    <Box bg={"#FAF6F3"} color={"gray.700"} as="footer">
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="start"
        wrap="wrap"
        justify="space-between"
        py={10}
        px={{ base: 5, lg: 20 }}
        maxW="6xl"
        mx="auto"
      >
        <VStack align="start" spacing={1} mb={{ base: 5, lg: 0 }}>
          <Logo />
          <Text fontWeight="bold">{t(customData.title)}</Text>
          <Text as="address" fontSize="sm">
            {t(customData.address)}, {t(customData.postal_code)}{" "}
            {t(customData.city)}
          </Text>
          <Link href={`tel:${t(customData.phone)}`} isExternal fontSize="sm">
            {t(customData.phone)}
          </Link>
          <Link href={`mailto:${t(customData.email)}`} isExternal fontSize="sm">
            {t(customData.email)}
          </Link>
          {slug_1177 && (
            <Link
              href={`https://www.1177.se/Vastra-Gotaland/hitta-vard/kontaktkort/${slug_1177}/`}
              isExternal
            >
              <Image src={logo1177} htmlWidth="100px" alt="1177 Vårdguiden" />
            </Link>
          )}
        </VStack>

        <VStack
          align="start"
          mt={{ base: 3, md: 5, lg: 10 }}
          spacing={4}
          w={{ lg: "calc(100% - 250px)" }}
        >
          <Text fontSize="lg" fontWeight="bold" mt={0} mb={3}>
            {t("other_facilities")}
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
            {additionalCentrasData.map((center, index) => (
              <VStack align="start" key={index}>
                <Link
                  href={center.url}
                  isExternal
                  fontWeight="bold"
                  fontSize="sm"
                >
                  {center.title}
                </Link>
                <Text as="address" fontSize="sm">
                  {center.address}, {center.postal_code} {center.city}
                </Text>
                <Link href={`tel:${center.phone}`} isExternal fontSize="sm">
                  {center.phone}
                </Link>
                <Link href={`mailto:${center.email}`} isExternal fontSize="sm">
                  {center.email}
                </Link>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
