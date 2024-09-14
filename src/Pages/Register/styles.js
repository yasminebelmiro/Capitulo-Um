import styled from "styled-components";
import { MdAlternateEmail, MdPassword } from "react-icons/md";

export const Container = styled.div`
  height: 100vh;
  background-color: #ccd5ae;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 1000px;
  height: 500px;
  background-color: #e9edc9;
  border-radius: 30px;
  display: flex;
`;

export const Logo = styled.h1`
  font-family: "Playwrite CU", cursive;
  margin: 10px;
  font-weight: bold;
  font-size: 20px;
  text-align: right;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
`;
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 0 100px;
`;

export const Image = styled.img`
  width: 400px;
`;

export const Title = styled.h2`
  margin: 2px;
  text-align: center;
  font-family: "Playwrite CU", cursive;
`;

export const Text = styled.p`
  font-weight: bold;
  margin: 2px;
`;
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  ::placeholder {
    color: #000;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  font-size: 16px;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 10px 10px 10px 40px;
  margin: 0;
`;

export const EmailIcon = styled(MdAlternateEmail)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
`;

export const PasswordIcon = styled(MdPassword)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
`;

export const Link = styled.a`
  text-align: right;

  font-weight: bold;
  cursor: pointer;
  color: #000000;
  &:hover {
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  border: none;
  height: 40px;
  color: #ffffff;
  background-color: #90a159;
  font-family: "Playwrite CU", cursive;
  font-size: 16px;
  margin: 10px 0;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
