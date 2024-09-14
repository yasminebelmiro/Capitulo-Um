import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  background-color: #faedcd;
  border-radius: 15px;
  padding: 15px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 5px;
`;

export const Title = styled.h3`
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

export const Autor = styled.p`
  margin: 0;
  padding: 0;
`;

export const Cover = styled.img`
  width: 100px;
  margin-right: 20px;
`;

export const Genre = styled.p`
  margin: 0;
  padding: 0;
`;

export const Price = styled.p`
  margin: 0;
  padding: 0;
`;

export const Button = styled.button`
  margin: 0;
  width: 100px;
  padding: 8px 12px;
  background-color: #d4a373;
  color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: #e1fac0;
  }
`;
