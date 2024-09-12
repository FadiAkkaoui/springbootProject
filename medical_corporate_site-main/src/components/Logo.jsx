/* eslint-disable react/prop-types */
import { Image } from "@chakra-ui/react";
import medicalLogo from "../assets/medical-logo.webp";

const Logo = (props) => {
  return (
    <Image
      htmlWidth={props.width || "200px"}
      htmlHeight={"auto"}
      src={medicalLogo}
      m={1}
      {...props}
    />
  );
};

export default Logo;