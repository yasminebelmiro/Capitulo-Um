import React, { useState } from "react";

import {
  HomeContainer,
  Destaque,
  Title,
  Button,
  TitleContent,
  Content,
  Text,
  Subtitle,
  BooksContainer,
} from "./syles";

import Header from "../../Components/Header";
import imgDestaque from "../../assets/destaque.png";
import Card from "../../Components/Cards";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/inxex";

const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleVerMais = () => {
    navigate("/login");
  };

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <HomeContainer>
        <Destaque>
          <TitleContent>
            <Title>Encontre sua próxima leitura</Title>
            <Text>
              Os maiores bestsellers você encontra aqui no{" "}
              <strong>Capítulo Um.</strong>
            </Text>
            <Button onClick={handleVerMais}>Comece agora</Button>
          </TitleContent>
          <Content>
            <img src={imgDestaque} />
          </Content>
        </Destaque>
      </HomeContainer>

      <Subtitle>Best Seller</Subtitle>
      <BooksContainer>
        <Card livro="Assim que acaba" />
        <Card livro="Assim que começa" />
        <Card livro="A Empregada" />
        <Card livro="Verity" />
        <Card livro="A Biblioteca da Meia Noite" />
        <Card livro="A Metamorfose" />
        <Card livro="O Hobbit" />
        <Card livro="Chama de Ferro" />
        <Card livro="Tudo e rio" />
      </BooksContainer>
      <Footer />
    </>
  );
};

export default Home;
