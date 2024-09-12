import { Flex, Button, Tooltip, Link } from "@chakra-ui/react";
// import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DesktopMenu = () => {
  // const location = useLocation();
  const { t } = useTranslation();
  // const navigate = useNavigate();
  const handleGetListedButtonClick = () => {
    window.open(
      "https://m05-mg-local.idp.funktionstjanster.se/samlv2/idp/sign_in/842",
      "_blank"
    );
  };
  const handleIntranetClick = () => {
    window.open("https://intranet.snabbvaccin.se/", "_blank");
  };

  return (
    <Flex as="ul" listStyleType="none" ml={0} align="center" gap={6}>
        <>
          <Button
            m={1}
            size="sm"
            colorScheme="customBlue"
            onClick={handleGetListedButtonClick}
          >
            {t("get_listed")}
          </Button>
          <Tooltip label={t("intranet_info")} placement="bottom">
            <Link
              as="li"
              onClick={handleIntranetClick}
              cursor="pointer"
              _hover={{ fontWeight: "bold" }}
            >
              {t("intranet")}
            </Link>
          </Tooltip>
          {/* More list items can be added here */}
        </>
    </Flex>
  );
};

export default DesktopMenu;
