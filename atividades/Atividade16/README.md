# API RESTful - Produtos

API RESTful para gerenciamento de produtos. Esta API permite realizar operações de CRUD (Criar, Ler, Atualizar e Deletar) em produtos.

## Funcionalidades

- **Cadastrar produtos**
- **Listar produtos**
- **Visualizar detalhes de um produto específico**
- **Atualizar informações de um produto**
- **Excluir um produto**

## Tecnologias utilizadas

- **Linguagem**: Java com Spring Framework
- **Testes**: JUnit & Mockito
- **Banco de dados**: H2 Database

## Endpoints

### 1. Criar produto

- **Método**: `POST`
- **Endpoint**: `/produtos`
- **Corpo da requisição**:
  
```json
{
  "nome": "Produto A",
  "descricao": "Descrição do Produto A",
  "preco": 99.9,
  "qtdEstoque": 10
}
```

### 2. Listar produtos

- **Método**: `GET`
- **Endpoint**: `/produtos`
- **Resposta**:

```json
[
  {
    "nome": "Produto A",
    "descricao": "Descrição do Produto A",
    "preco": 99.9,
    "qtdEstoque": 10,
    "id": 1
  },
  {
    "nome": "Produto B",
    "descricao": "Descrição do Produto B",
    "preco": 49.9,
    "qtdEstoque": 5,
    "id": 2
  }
]
```

### 3. Visualizar produto específico

- **Método**: `GET`
- **Endpoint**: `/produtos/{id}`
- **Resposta**:

```json
{
    "nome": "Produto A",
    "descricao": "Descrição do Produto A",
    "preco": 99.9,
    "qtdEstoque": 10,
    "id": 1
}
```

4. Atualizar produto

- **Método**: `PUT`
- **Endpoint**: `/produtos/{id}`
- **Corpo da requisição**:

```json
{
  "nome": "Produto Atualizado",
  "descricao": "Nova descrição",
  "preco": 89.99,
  "quantidade": 15
}

    Resposta:

{
    "nome": "Produto Atualizado",
    "descricao": "Nova descrição",
    "preco": 69.9,
    "qtdEstoque": 10,
    "id": {id}
}
```

5. Excluir produto

- **Método**: `DELETE`
- **Endpoint**: `/produtos/{id}`

```
{
  Produto excluído...
}
```

```
Estrutura de Diretórios

├── .mvn
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── example
│   │   │           └── Atividade16
│   │   │               ├── controller
│   │   │               │   └── ProdutoController.java
│   │   │               ├── model
│   │   │               │   └── Produto.java
│   │   │               ├── repository
│   │   │               │   └── ProdutoRepository.java
│   │   │               ├── service
│   │   │               │   └── ProdutoService.java
│   │   │               └── Atividade16Application.java
│   │   ├── resources
│   │   │   └── application.properties
│   │   │
│   ├── test
│   │   ├── java
│   │   │   └── com
│   │   │       └── example
│   │   │           └── Atividade16
│   │   │               ├── Atividade16ApplicationTests.java
```
