# Aula 3

## Rest-full

> REST significa Representational State Transfer. Em português, Transferência de Estado Representacional. Trata-se de uma abstração da arquitetura da Web. Resumidamente, o REST consiste em princípios/regras/constraints que, quando seguidas, permitem a criação de um projeto com interfaces bem definidas. Desta forma, permitindo, por exemplo, que aplicações se comuniquem.

Existe uma certa confusão quanto aos termos REST e RESTful. Entretanto, ambos representam os mesmo princípios. A diferença é apenas gramatical. Em outras palavras, sistemas que utilizam os princípios REST são chamados de RESTful.

REST: conjunto de princípios de arquitetura
RESTful: capacidade de determinado sistema aplicar os princípios de REST.

---

## Axios

Há diversos momentos quando você está desenvolvendo uma aplicação Web que podem necessitar consumir e exibir dados de uma API. Há várias maneiras de se fazer isso, mas a maneira mais popular é usando axios, um cliente HTTP baseado em Promises.
Temos várias maneiras de recuperarmos informações de uma API, mas primeiro é interessante descobrir o formato dos dados, para sabermos o que mostraremos. Para fazer isso, faremos uma requisição para o endpoint da API, para podermos ver os dados.

Axios é um cliente HTTP, que funciona tanto no browser quanto em node.js. A biblioteca é basicamente uma API que sabe interagir tanto com XMLHttpRequest quanto com a interface http do node. Isso significa que o mesmo código utilizado para fazer requisições ajax no browser também funciona no servidor. Além disso, as requisições feitas através da biblioteca retornam uma promise, compatível com a nova versão do JavaScript - ES6. Promissor, certo? Vamos ver como funciona!

```
yarn add axios
yarn add --dev @types/axios
```

Exemplo de chamada axios (vamos utilizar o playground para o teste)

```js
axios.get('https://api.github.com/users/' + username)
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });
```

```js

try {
  const { data } = await axios.get(`https://api.github.com/users/${username}`);
} catch (error) {
    console.error(error);
  throw error;
}
```

## Detalhe Importante

Por padrão nas versões mais atualizadas do android, não é aceito requisições feitas em http:// apenas https://

## Criando uma API com express + deploy via Heroku

Vamos criar um novo

[Heroku](https://www.heroku.com/)

## Star Wars API

[Star Wars API](https://swapi.co/)
