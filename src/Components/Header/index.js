import {
  HeaderContainer,
  Logo,
  LinksContainer,
  StyledLink,
  Input,
  SearchContainer,
  SearchIcon,
  Menu,
} from "./styled";

const Header = ({ autenticado, search, setSearch }) => {
  return (
    <>
      <HeaderContainer>
        <Logo>Capítulo Um</Logo>
        <SearchContainer>
          <SearchIcon />
          <Input
            value={search}
            placeholder="Livros, autores ou editoras"
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchContainer>

        {autenticado ? (
          <LinksContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/contato">Contato</StyledLink>
            <StyledLink to="/perfil">Perfil</StyledLink>
          </LinksContainer>
        ) : (
          <LinksContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="#contato">Contato</StyledLink>
            <StyledLink to="/login">Entrar</StyledLink>
            <StyledLink to="/">Cadastrar</StyledLink>
          </LinksContainer>
        )}
      </HeaderContainer>
    
    </>
  );
};

export default Header;
