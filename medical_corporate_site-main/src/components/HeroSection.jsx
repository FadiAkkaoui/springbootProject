/* eslint-disable no-unused-vars */
import {
  Box,
  Flex,
  Heading,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import heroImageMedical from "../assets/doctor_alone.webp";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  const handleGetListedButtonClick = () => {
    window.open(
      "https://m05-mg-local.idp.funktionstjanster.se/samlv2/idp/sign_in/842",
      "_blank"
    );
  };
  return (
    <Box mt={"74px"} position="relative" textAlign="center" color="white">
      <Box
        data-cy="image"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        bgImage={`url(${heroImageMedical})`}
        bgSize="cover"
        bgPos="center"
        zIndex="-1"
      />

      {/* Använd Flex för att placera innehållet längst ner */}
      <Flex
        direction="column"
        height={"400px"}
        justify="end"
        p={{ base: 4, md: 8 }}
        zIndex="docked"
      >
        <Heading
          as="h1"
          size={useBreakpointValue({ base: "xl", md: "xl" })}
          fontWeight="bold"
          textTransform="uppercase"
        >
          {t("slogans.main.part_one")}{" "}
          <br />
          <span className="italic">
            {t("slogans.main.part_two")}
          </span>
        </Heading>

        <Flex direction="row" spacing={4} justify="center" mt={8}>
          {/* <Button
            m={1}
            size="lg"
            colorScheme="customBlue"
            bg="customBlue.500"
            _hover={{ bg: "customBlue.700" }}
          >
            {t("find_helthcare")}
          </Button> */}
          <Button
            m={1}
            size="lg"
            colorScheme="customBlue"
            variant="outlineCustom"
            onClick={handleGetListedButtonClick}
          >
            {t("get_listed")}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
