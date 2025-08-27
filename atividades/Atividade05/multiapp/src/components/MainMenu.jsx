import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const MenuLink = styled(Link)`
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

const MainMenu = () => (
  <MenuContainer>
    <MenuLink to="/ip-address-finder">IP Address Finder</MenuLink>
    <MenuLink to="/qr-code-generator">QR Code Generator</MenuLink>
    <MenuLink to="/movie-search-engine">Movie Search Engine</MenuLink>
  </MenuContainer>
);

export default MainMenu;