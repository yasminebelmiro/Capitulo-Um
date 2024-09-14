import React from "react";
import {
  RedesContent,
  FootContainer,
  ContactContent,
  Logo,
  LogoContent,
  Slogan,
  Text,
  ReserverRightContent,
} from "./style";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaBluesky, FaDiscord } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <FootContainer >
        <ContactContent>
          <LogoContent>
            <Logo>Capitulo Um</Logo>
            <Slogan>Cada história começa aqui.</Slogan>
          </LogoContent>
          <RedesContent>
            <FaInstagram size={30}/>
            <FaDiscord size={30}/>
            <FaBluesky  size={30}/>
            <FaLinkedin  size={30}/>
          </RedesContent>
        </ContactContent>
        <ReserverRightContent>
          <Text>
            Copyright © 2024 Capitulo Um. Todos os dieritos reservados.
          </Text>
        </ReserverRightContent>
      </FootContainer>
    </>
  );
};

export default Footer;
