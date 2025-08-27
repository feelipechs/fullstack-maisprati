# MultiApp

Este é um projeto de uma aplicação web desenvolvida com React, que simula uma plataforma com múltiplas funcionalidades, incluindo autenticação de login, busca por IP, geração de QR Code e uma busca de filmes.

## Funcionalidades

- **Tela de Login com Fake JWT**: Simulação de autenticação utilizando JSON Web Token (JWT). O login é feito de forma simples, com dados de exemplo, para demonstrar o fluxo de autenticação.

- **Menu de Navegação**: O menu permite selecionar entre três funcionalidades principais:
  - **IP Address Finder**: Encontre informações sobre o IP atual usando uma API externa.
  - **QR Code Generator**: Geração de códigos QR baseados em informações fornecidas pelo usuário.
  - **Movie Search Engine**: Realize buscas de filmes através de uma API, retornando informações como poster(imagem), título e ano de lançamento.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção da interface de usuário.
- **React Router**: Utilizado para navegação entre as diferentes páginas do app.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **QRCODE**: Pacote npm que gera qrcode.
- **Fake JWT**: Simulação de autenticação via JSON Web Token.
- **APIs externas**: A aplicação se conecta com APIs para buscar informações de IP e realizar buscas de filmes.

Endpoints de APIs
1. IP Finder

A funcionalidade de busca de IP é baseada em uma API pública que retorna informações sobre o IP atual.

    Endpoint: https://ipinfo.io/${ip}/json

2. QR Code Generator

A geração de QR Code é feita utilizando o pacote qrcode do npm. O QR Code é gerado localmente, sem necessidade de uma API externa.

3. Movie Search Engine

A busca de filmes é feita através da API do OMDb, que retorna informações detalhadas sobre filmes.

    Endpoint: https://www.omdbapi.com/?s=${query}&apikey=YOUR_API_KEY
