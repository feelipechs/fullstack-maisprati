import styled from 'styled-components'

const HeaderContainer = styled.header`
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Sombra suave na borda inferior */
  border-bottom: 2px solid #ddd;  /* Borda sutil na parte inferior */
`;

const Logo = styled.a`
  font-size: 3rem;  /* Tamanho do título */
  font-family: 'Story Script', cursive;  /* Aplica Story Script somente no título */
  font-weight: normal;
  color: #000;
  text-decoration: none;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo href='/menu'>MultiApp</Logo>
      </HeaderContainer>
    </>
  );
}

export default Header;