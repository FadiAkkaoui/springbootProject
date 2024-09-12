import { Box, Flex, Button, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ReadMore from "./ReadMore";
import { toSnakeCase } from "../services/toSnakeCase";
import { MDContentBox } from '@AgileVentures/medical_ui_library';

const Services = () => {
  const { t } = useTranslation();
  function getImageUrl(image) {
    return new URL(`/public/${image}`, import.meta.url);
  }
  const services = t("services", { returnObjects: true });

  const serviceUI = Object.entries(services).map(([key, service], index) => {
    const isImageRight = index % 2 !== 0;
    return (
      <Flex
        id={toSnakeCase(service.title)}
        key={key}
        direction={{ base: "column", md: isImageRight ? "row-reverse" : "row" }}
        alignItems="start"
        mb={5}
      >
        <Box
          flex="1"
          mt={isImageRight ? 3 : 0}
          mb={{ base: 5, md: 10 }} // Adjusted for responsive spacing between text and image
          mr={{ base: 0, md: 5 }} // Add right margin only when image is on the left
          ml={{ base: 0, md: 5 }} // Add left margin only when image is on the right
        >
          <Heading as="h2" size="xl" color="gray.900" mb={4}>
            {t(service.title)}
          </Heading>
          <Box color="gray.500">
            <ReadMore
              maxH="300px"
              cta={
                service.cta && (
                  <Button m={1} size="lg" colorScheme="customBlue">
                    {t(service.cta_button_text)}
                  </Button>
                )
              }
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: t(service.content),
                }}
              />
            </ReadMore>
          </Box>
        </Box>
        <Box
          mt={!isImageRight ? 3 : 0}
          mr={1} // Add right margin only when image is on the left
          ml={1} // Add left margin only when image is on the right
          flex="1"
          w="full"
          position="relative"
          _before={{
            content: '""',
            display: "block",
            paddingTop: "100%", // for a square aspect ratio
          }}
          bgImage={`url("${getImageUrl(service.image)}")`}
          bgPosition="top"
          bgRepeat="no-repeat"
          bgSize="contain"
        ></Box>
      </Flex>
    );
  });

  return <MDContentBox>{serviceUI}</MDContentBox>;
};

export default Services;
