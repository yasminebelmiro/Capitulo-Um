import React, { useState, useEffect } from "react";
import axios from "axios";
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
import Carregando from "../Carregando";

const FilterCategory = ({ categoria, autenticado }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Função para fazer múltiplas requisições
    const fetchBooks = async () => {
      try {
        // Primeira requisição para obter 40 livros
        const response1 = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${categoria}&maxResults=40`
        );
        const books1 = response1.data.items || [];

        // Segunda requisição para obter os próximos 10 livros
        const response2 = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${categoria}&startIndex=40&maxResults=10`
        );
        const books2 = response2.data.items || [];

        // Combina os resultados das duas requisições
        setBooks([...books1, ...books2]);
      } catch (error) {
        console.error("Erro ao buscar livros por categoria e idioma:", error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [categoria]);

  if (loading) return <Carregando />;

  return (
    <>
      {books.length > 0 ? (
        books.map((book, index) => (
          <CardContainer key={index}>
            <Cover
              src={book.volumeInfo.imageLinks?.thumbnail || "placeholder.jpg"}
              alt={book.volumeInfo.title}
            />
            <Description>
              <Title>{book.volumeInfo.title}</Title>
              <Autor>
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : "Autor desconhecido"}
              </Autor>
              <Genre>
                {book.volumeInfo.categories
                  ? book.volumeInfo.categories.join(", ")
                  : "Gênero desconhecido"}
              </Genre>
              <Price>
                {book.saleInfo?.retailPrice
                  ? `${book.saleInfo.retailPrice.amount.toFixed(2)} ${book.saleInfo.retailPrice.currencyCode}`
                  : "Preço não disponível"}
              </Price>
              {autenticado ? <Button>Comprar</Button> : null}
            </Description>
          </CardContainer>
        ))
      ) : (
        <p>Nenhum livro encontrado.</p>
      )}
    </>
  );
};

export default FilterCategory;
