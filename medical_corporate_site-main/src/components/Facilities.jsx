/* eslint-disable no-unused-vars */
import { MDContentBox } from "@AgileVentures/medical_ui_library";
import {
  currentHostname,
  isAProductionSite,
  productionSites,
} from "../services/hostService";
import { useTranslation } from "react-i18next";
import { Link, Heading, Box, chakra, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Facilities = () => {
  const { t, i18n } = useTranslation();

  const additionalCentrasData = Object.keys(productionSites)
    .filter((center) => center !== currentHostname)
    .map((center) => {
      const siteData = productionSites[center];
      const localizedData = siteData[i18n.language];
      const centerData = t(`custom_content.${localizedData.contentKey}`, {
        returnObjects: true,
      });
      return {
        ...centerData,
        url: `https://${center}`,
        slug_1177: siteData.slug_1177,
        coords: siteData.coords,
        main_officer: siteData.main_officer,
      };
    });
  if (isAProductionSite()) {
    return <></>;
  }
  return (
    <MDContentBox>
      <Box
        maxW="7xl"
        mx="auto"
        px={{
          base: 4,
          lg: 8,
        }}
        mb={{ base: 4, md: 10, lg: 10 }}
      >
        <Box
          textAlign={{
            lg: "center",
          }}
        >
          <chakra.h2
            _light={{
              color: "brand.600",
            }}
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            {t("features.small_title")}
          </chakra.h2>
          <chakra.p
            mt={2}
            fontSize={{
              base: "3xl",
              sm: "4xl",
            }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            _light={{
              color: "gray.900",
            }}
          >
            {t("features.main_title")}
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{
              lg: "auto",
            }}
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: t("features.description"),
              }}
            />
          </chakra.p>
        </Box>
      </Box>
      {additionalCentrasData.map((center, index) => (
        <div key={index}>
          <Link href={center.url} isExternal display="flex" alignItems="center">
            <Heading as="h2" size="lg" mr="2">
              {" "}
              {center.title}
            </Heading>
            <ExternalLinkIcon />
          </Link>
          {center.main_officer && (
            <Text mt={2} fontWeight={'bold'} color="gray.500" fontSize="xl">
              {t("main_officer_label") + center.main_officer}
            </Text>
          )}
          <chakra.p
            mt={1}
            mb={4}
            maxW="2xl"
            fontSize="xl"
            mx={{
              lg: "auto",
            }}
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: center.description,
              }}
            />
          </chakra.p>
        </div>
      ))}
    </MDContentBox>
  );
};

export default Facilities;
