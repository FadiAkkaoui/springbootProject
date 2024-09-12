/* eslint-disable no-unused-vars */
import { Flex, Box, Spacer, Hide, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSelector from "./LanguageSelector";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

const Header = () => {
  const { t, i18n } = useTranslation();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const headerStyles = {
    width: "100%",
    backgroundColor: "#FAFAFA",
    position: "fixed",
    top: "0px",
    borderBottom: "1px solid rgba(0, 0, 0, .1)",
    boxShadow: "0 2px 5px -1px rgba(0, 0, 0, .8)",
    zIndex: 10, // Ensure header is above other content
  };
  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Box as="header" sx={headerStyles}>
      <Flex as="nav" maxW="container.xl" mx="auto" py={2} px={4} align="center">
        <Logo />
        <Spacer />
        {/* Desktop Menu */}
        <Hide below="md">
          <DesktopMenu />
          <Box ml={5}>
            <LanguageSelector
              currentLanguage={i18n.language}
              onLanguageChange={handleLanguageChange}
            />
          </Box>
        </Hide>
        <Hide above="md">
          <Box mr={2}>
            <LanguageSelector
              currentLanguage={i18n.language}
              onLanguageChange={handleLanguageChange}
            />
          </Box>
          <MobileMenu btnRef={{ isOpen, onOpen, onClose }} />
        </Hide>
      </Flex>
    </Box>
  );
};

export default Header;
