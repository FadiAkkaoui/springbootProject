/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Flex, Box, Icon, chakra } from "@chakra-ui/react";

const Feature = ({ title, icon, children }) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Flex
          alignItems="center"
          justifyContent="center"
          h={12}
          w={12}
          rounded="sm"
          bg="customBlue.500"
          color="white"
        >
          <Icon
            boxSize={6}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {icon}
          </Icon>
        </Flex>
      </Flex>
      <Box ml={4}>
        <chakra.dt
          fontSize="lg"
          fontWeight="medium"
          lineHeight="6"
          color="gray.900"
        >
          {title}
        </chakra.dt>
        <chakra.dd mt={2} color="gray.500">
          {children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};

export default Feature;
