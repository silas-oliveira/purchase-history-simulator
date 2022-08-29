# Boas-vindas ao repositório do projeto Purchase History Simulator!

<br />

### <strong>👨‍💻 O que foi desenvolvido</strong>

Neste projeto, foi desenvolvida uma API, que consome dados da 'FakeStoreAPI', e projeta esses dados, simulando o 
comportamento do historico de compras de um usuário!

Uma aplicação em `Node.js` usando `Express.js` e `Typescript`, composta pela arquitetura `MSC`.

<br/>

🚧 Testes iniciais de integração, criados! 🚧

<br />

### <strong>💻 Como rodar o projeto localmente</strong>

- Necessário ter o `node` instalado, após isso, basta clonar o repositório e digitar o comando `npm install`.<br />
- O projeto contém um script usado para upar o servidor e possibilitar a iteração com a rota: `npm run watch`

<br />

## Endpoints da API

### - GET `/cart-history?id='idDoUsuario'`

  * **[Validado que o parametro 'id', recebido atraves da rota, realmente existe, e condiz com o tipo esperado ]**
- Se a requisição é feita com sucesso, seguem as seguintes informações como resposta, exatamente nesse formato:

---

  ```json
 {
    "nome": "don romer",
    "email": "don@gmail.com",
    "ultimasCompras": [
        {
            "id": 6,
            "userId": 4,
            "date": "2020-03-01T00:00:02.000Z",
            "products": [
                {
                    "productId": 10,
                    "quantity": 2
                },
                {
                    "productId": 12,
                    "quantity": 3
                }
            ],
            "__v": 0
        }
    ]
}
  ```
