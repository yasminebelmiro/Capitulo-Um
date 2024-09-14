import React, { useState, useEffect } from "react";
import {
  CardContainer,
  Cover,
  Description,
  Title,
  Genre,
  Price,
  Button,
  Autor,
} from "./styles";
import axios from "axios";
import Carregando from "../Carregando";

const Cards = ({ livro, autenticado }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fazendo a requisição com Axios
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${livro}`)
      .then((response) => {
        const bookData = response.data.items[0].volumeInfo;
        const saleInfo = response.data.items[0].saleInfo;

        setBook({
          title: bookData.title,
          author: bookData.authors
            ? bookData.authors.join(", ")
            : "Autor desconhecido",
          genre: bookData.categories
            ? bookData.categories[0]
            : "Gênero desconhecido",
          cover: bookData.imageLinks
            ? bookData.imageLinks.thumbnail
            : "placeholder.jpg", // Verifica se a capa existe
          price:
            saleInfo && saleInfo.retailPrice // Verifica se o preço existe
              ? `${saleInfo.retailPrice.amount.toFixed(2)} ${
                  saleInfo.retailPrice.currencyCode
                }`
              : "Preço não disponível",
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar o livro: ", error);
      });
  }, [livro]);

  if (!book) return <Carregando />

  return (
    <CardContainer>
      <Cover src={book.cover} alt={book.title} />
      <Description>
        <Title>{book.title}</Title>
        <Autor>{book.author}</Autor>
        <Genre>{book.genre}</Genre>
        <Price>{book.price}</Price>
        {autenticado ? <Button>Comprar</Button> : null}
      </Description>
    </CardContainer>
  );
};

export default Cards;
