import React from "react";
import loginImage from "../../assets/login.png";
import {
  Container,
  Content,
  Logo,
  Button,
  Link,
  FormContent,
  Image,
  Input,
  Text,
  Title,
  Row,
  InputContainer,
  EmailIcon,
  PasswordIcon,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Register = () => {

const navigate = useNavigate();

  const handleLogin = ( ) => {
    navigate("/login");
  }
  return (
    <>
      <Container>
        <Content>
          <FormContent>
            <Title>Cadastro</Title>
            <Text>Email</Text>
            <InputContainer>
              <EmailIcon />
              <Input placeholder="*Email" type="email" />
            </InputContainer>
            <Text>Telefone</Text>
            <InputContainer>
              <EmailIcon />
              <Input placeholder="*(99)99999-9999" type="text" />
            </InputContainer>
            <Text>Senha</Text>
            <InputContainer>
              <PasswordIcon />
              <Input placeholder="*Senha" type="password" />
            </InputContainer>
            <Button onClick={handleLogin}>Cadastrar</Button>
            <Text>
              Já tem cadastro?&nbsp;
              <Link href="/login">Entrar agora!</Link>
            </Text>
          </FormContent>
          <Row>
            <Logo>Capítulo Um</Logo>
            <Image src={loginImage} />
          </Row>
        </Content>
      </Container>
    </>
  );
};

export default Register;
