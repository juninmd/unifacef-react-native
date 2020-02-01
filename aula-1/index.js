// Para conseguir executar deixe descomentado somente 1 bloco por vez.
// FUNÇAO SIMPLES
// =====================================================================

// function soma(x, y) {
//   return x + y;
// }

// console.log('sem default =', soma(1,2));
// console.log('com default =',soma(1));
// console.log('com default =',soma(1, 'coringa'));
// console.log('com default =', soma(1, '1'));
// console.log('com default =', soma('1', 1));

// FUNÇÃO COM ARROW FUNCTION
// =====================================================================

// const x = (a, b) => { return a + b };
// console.log(x(1, 2));

// DESTRUCT DE ARRAY
// =====================================================================
// const values = [1, 2, 3, 4, 5];

// const [a, b, , c] = values

// CALLBACK SINCRONO (PARADIGMA FUNCIONAL)
// ===================================================================

// const t = (x, fun) => {
//   console.log(x);
//   fun(5, 5);
// }
// const soma = (h, t) => { console.log(h + t) }
// console.log(t('batata', soma));

// MANIPULAÇÃO DE ARRAY
// ================================================================
// const values = [1, 2, 3, 4, 5];
// const [a, b, ...rest] = values
// const lista = [];
// lista.push(a);
// lista.push(b);
// lista.push(...rest);
// console.log(lista);

// const filtrada = lista.filter((item) => item > 3);
// const mapa = lista.map((item, index) => {
//   return {
//     value: item,
//     index
//   }
// });
// console.log(mapa);

// MANIPULAÇÃO DE STRING
// ================================================================
// const batata = 'Batata';
// console.log(batata.toUpperCase());
// console.log(batata.toLowerCase());
// console.log(batata.replace(/t/g, 'r'));
// console.log(batata.indexOf('t'));

// MANIPULAÇÃO DE OBJETO
// =================================================================
// const Pessoa = {
//   nome: 'coringa',
//   sobrenome: 'souza',
//   rg: 11111111
// }
// console.log(Pessoa);
// Pessoa.rg = 444444;
// console.log(Pessoa);

// CALLBACK
// ===============================================================
// (() => {
//   console.log('exemplo de callback');

//   getLista(5, (err, result) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     getLista(5, (errB, resultB) => {
//       if (errB) {
//         console.error(errB);
//         return;
//       }
//       getLista(5, (errC, resultC) => {
//         if (errC) {
//           console.error(errC);
//           return;
//         }

//         console.log(resultC, resultB, result);
//       })

//       // console.log(resultB);
//     })
//     // console.log(result);
//   })

// })();

// function getLista(qtd, callback) {
//   const lista = [];

//   for (let i = 0; i < qtd; i++) {
//     lista.push(i);
//   }

//   if (lista.length > 5) {
//     return callback(new Error('limite excedido de lista'), null);
//   }

//   return callback(null, lista);
// }

// PROMISE
// ===================================================================
// (() => {
//   console.log('exemplo de promise');

//   getLista(5)
//     .then((result) => {
//       return getLista(5);
//     })
//     .then((result) => {
//       return console.log(result);
//     })
//     .catch((err) => {
//       return console.error(err);
//     })

// })();

// function getLista(qtd) {
//   return new Promise((resolve, reject) => {
//     const lista = [];

//     for (let i = 0; i < qtd; i++) {
//       lista.push(i);
//     }

//     if (lista.length > 5) {
//       return reject(new Error('limite excedido de lista'));
//     }

//     return resolve(lista);
//   })
// }

// ASYNC/AWAIT
// ====================================================================
// (async () => {
//   console.log('exemplo de async await');

//   let promises = [];

//   promises.push(getLista(2));
//   promises.push(getLista(5));

//   const all = await Promise.all(promises);

//   try {
//     const result = await all;
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// })();

// async function getLista(qtd) {
//   const lista = [];

//   for (let i = 0; i < qtd; i++) {
//     lista.push(i);
//   }

//   if (lista.length > 5) {
//     throw new Error('limite excedido de lista');
//   }

//   return lista;
// }
// ====================================================================