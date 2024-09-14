import styled from "styled-components";

export const HomeContainer = styled.div``;

export const Destaque = styled.div`
  width: 100%;
  height: 500px;
  background-color: #e9edc9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-family: "Playwrite CU", cursive;
  font-size: 40px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
`;
export const Text = styled.p`
  font-size: 20px;
  strong {
    font-family: "Playwrite CU", cursive;
    font-size: 15px;
  }
`;

export const Button = styled.button`
  font-family: "Playwrite CU", cursive;
  font-weight: bold;
  width: 200px;
  padding: 10px;
  border: none;
  background-color: #000000;
  color: #ffffff;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const TitleContent = styled.div`
  margin: 0 100px;
`;

export const Content = styled.div``;

export const Subtitle = styled.p`
  font-family: "Playwrite CU", cursive;
  font-size: 40px;
  text-align: center;
`;

export const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 0 40px;
  width: 100%;
  max-width: 1200px; /* Defina uma largura máxima, se desejar */
  margin: 0 auto; /* Centraliza horizontalmente */
  /* Centralize verticalmente (se necessário) */
  /* Se quiser centralizar verticalmente em uma altura específica:
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  */
`;
