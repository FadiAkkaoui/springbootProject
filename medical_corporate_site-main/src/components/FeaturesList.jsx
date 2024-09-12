/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Flex, Box, Icon, chakra, Stack } from "@chakra-ui/react";
import {
  MdBiotech,
  MdMenuBook,
  MdRefresh,
  MdEscalatorWarning,
  MdOutlineThermostat,
  MdLocalPhone,
} from "react-icons/md";
import { useTranslation } from "react-i18next";
import Feature from "./Feature";
import { MDContentBox } from '@AgileVentures/medical_ui_library';
import { isAHeadOfficeSite } from "../services/hostService";
const FeaturesList = ({ customKey }) => {
  const { t } = useTranslation();
  const featureKeys = t("features.items", { returnObjects: true });
  const contentData = Object.keys(featureKeys).map((key) => ({
    title: t(`features.items.${key}.title`),
    description: t(`features.items.${key}.description`),
    icon: t(`features.items.${key}.icon`),
  }));
  const customData = t(`custom_content.${customKey}`, { returnObjects: true });
  const iconMapping = {
    phone: <MdLocalPhone size={"1.6em"} />,
    biotech: <MdBiotech size={"1.6em"} />,
    menu_book: <MdMenuBook size={"1.6em"} />,
    refresh: <MdRefresh size={"1.6em"} />,
    escalator_warning: <MdEscalatorWarning size={"1.6em"} />,
    termostat: <MdOutlineThermostat size={"1.6em"} />,
    // ... map other icons
  };
  if (isAHeadOfficeSite()) {
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
            {t(customData.title) || t("features.main_title")}{" "}
            {/* Replace with your translation key */}
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
                __html: t(customData.description) || t("features.description"),
              }}
            />
            {/* {t(customData.description) || t("features.description")}{" "} */}
          </chakra.p>
        </Box>

        <Stack
          spacing={{
            base: 10,
            md: 0,
          }}
          display={{
            md: "grid",
          }}
          gridTemplateColumns={{
            md: "repeat(2,1fr)",
          }}
          gridColumnGap={{
            md: 8,
          }}
          gridRowGap={{
            md: 10,
          }}
          mt={10}
        >
          {contentData.map((item) => (
            <Feature
              key={t(item.title)}
              title={t(item.title)}
              icon={iconMapping[t(item.icon)]}
            >
              {t(item.description)}
            </Feature>
          ))}
        </Stack>
      </Box>
    </MDContentBox>
  );
};

export default FeaturesList;
