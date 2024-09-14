import React from "react";
import loginImage from "../../assets/login.png";
import { useNavigate } from "react-router-dom";
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

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/incio");
  };

  return (
    <>
      <Container>
        <Content>
          <Row>
            <Logo>Capítulo Um</Logo>
            <Image src={loginImage} />
          </Row>

          <FormContent>
            <Title>Login</Title>
            <Text>Email</Text>
            <InputContainer>
              <EmailIcon />
              <Input placeholder="Email" type="email" />
            </InputContainer>
            <Text>Senha</Text>
            <InputContainer>
              <PasswordIcon />
              <Input placeholder="Senha" type="password" />
            </InputContainer>

            <Link>Esqueceu a senha?</Link>
            <Button onClick={handleLogin}>Entrar</Button>
            <Text>
              Não tem cadastro?&nbsp;
              <Link href="/cadastro">Cadastrar agora!</Link>
            </Text>
          </FormContent>
        </Content>
      </Container>
    </>
  );
};

export default Login;
