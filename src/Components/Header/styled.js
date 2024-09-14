import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #e9edc9;
  align-items: center;
  height: 100px;
  width: 100%;
`;

export const Logo = styled.p`
  font-family: "Playwrite CU", cursive;

  font-weight: bold;
  font-size: 20px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  font-size: 20px;
  margin: 0 20px;
  cursor: pointer;
  padding: 2px 20px;

  &:hover {
    opacity: 0.5;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;

  ::placeholder {
    color: #000;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  outline: none;
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
`;

