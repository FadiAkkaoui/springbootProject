/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Button, VStack, HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ReadMore = ({ children, maxH = "300px", cta }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { t } = useTranslation();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <VStack align="start" spacing={4}>
      <Box
        position="relative"
        maxH={isExpanded ? "none" : maxH}
        overflow="hidden"
      >
        <Box>{children}</Box>
        {!isExpanded && (
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            height="4rem"
            background="linear-gradient(180deg, transparent, white 50%)"
          />
        )}
      </Box>
      <HStack spacing={2}>
        {/* <Button
          onClick={toggleExpanded}
          m={1}
          size="lg"
          colorScheme="customBlue"
          variant="outline"
        >
          {isExpanded ? t("show_less") : t("show_more")}
        </Button> */}
        {cta}
      </HStack>
    </VStack>
  );
};

export default ReadMore;
