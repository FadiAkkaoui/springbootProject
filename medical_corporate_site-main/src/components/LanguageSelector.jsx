/* eslint-disable react/prop-types */
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const LanguageSelector = ({ currentLanguage, onLanguageChange }) => {
  const languages = {
    en: { name: "English", flagCode: "gb" },
    sv: { name: "Svenska", flagCode: "se" },
    pl: { name: "Polski", flagCode: "pl" },
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="unstyled"
      >
        <span className={`fi fi-${languages[currentLanguage].flagCode}`} />
      </MenuButton>
      <MenuList>
        {Object.entries(languages).map(([code, { name, flagCode }]) => (
          <MenuItem
            key={code}
            onClick={() => onLanguageChange(code)}
            isDisabled={code === currentLanguage}
          >
            <span className={`fi fi-${flagCode}`} />
            <Box pl={2}>{name}</Box>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;
