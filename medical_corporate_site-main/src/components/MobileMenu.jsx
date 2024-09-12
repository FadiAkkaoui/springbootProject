/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  Link,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link as InternalLink } from "react-scroll";
import { toSnakeCase } from "../services/toSnakeCase";
import Logo from "./Logo";

const DrawerLink = ({ to, children, onClose }) => {
  return (
    <InternalLink
      to={to}
      smooth={true}
      duration={1000}
      offset={-80}
      onClick={onClose}
    >
      {children}
    </InternalLink>
  );
};

const MobileMenu = ({ btnRef }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const services = Object.values(t("services", { returnObjects: true }));
  const handleIntranetClick = () => {
    window.open("https://intranet.snabbvaccin.se/", "_blank");
    onClose();
  };
  return (
    <>
      <Button
        ref={btnRef}
        variant="outline"
        onClick={onOpen}
        data-cy="menu-button"
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Logo width="170px" />
            </DrawerHeader>
            <DrawerBody>
            <>
              {/* <Button onClick={() => navigate("/")}>{t("home")}</Button> */}
              <VStack spacing={4} align="stretch">
                {services &&
                  services.map((service) => (
                    <DrawerLink
                      key={toSnakeCase(service.title)}
                      to={toSnakeCase(service.title)}
                      onClose={onClose}
                    >
                      {service.title}
                    </DrawerLink>
                  ))}
                <Link as="p" onClick={handleIntranetClick}>
                  {t("intranet")}
                </Link>
              </VStack>
              {/* More buttons or links can be added here */}
            </>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default MobileMenu;
