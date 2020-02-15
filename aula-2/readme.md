# Aula 2

## App Gasolina ou Alcool'?'

> Revisão de como ficou o app ao-vivo

## Links úteis

* <https://github.com/juninmd/typescript-unifacef>
* <https://github.com/juninmd/etanol-gasolina>

## Conhecendo TypeScript

- O que é TypeScript? <https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html>

- Documentação Oficial <https://www.typescriptlang.org/>

- Compilando

```bash
npm install -g typescript
```

```bash
tsc arquivo.ts
```

```bash
yarn add --dev ts-node
```

- TsConfig

## Quem usa TypeScript'?'

- Slack <https://slack.engineering/typescript-at-slack-a81307fa288d>

- Google <https://github.com/google/gts>

-

## Criando APP em TypeScript

Iniciamos um projeto novo

```bash
npx react-native init gasolina
```

<https://facebook.github.io/react-native/docs/typescript>

```bash
yarn add --dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer
```

criar aquivo tsconfig.json

```json
{
    "compilerOptions": {
        "incremental": true,
        "target": "es5",
        "moduleResolution": "node",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "preserveConstEnums": true,
        "pretty": true,
        "lib": [
            "dom",
            "dom.iterable",
            "esnext"
        ],
        "module": "esnext",
        "forceConsistentCasingInFileNames": true,
        "allowJs": true,
        "checkJs": true,
        "sourceMap": true,
        "strict": true,
        "typeRoots": [
            "./node_modules/@types"
        ],
        "skipLibCheck": true,
        "jsx": "preserve",
        "rootDir": "src",
        "noImplicitReturns": true,
        "noImplicitThis": true,
        "noImplicitAny": false,
        "strictNullChecks": true,
        "suppressImplicitAnyIndexErrors": true,
        "noUnusedLocals": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true
    },
    "include": [
        "src",
        "src/__tests__"
    ],
    "exclude": [
        "node_modules",
        "babel.config.js",
        "metro.config.js",
        "jest.config.js"
    ],
    "typeRoots": [
        "./typings"
    ],
}
```

criar pasta typings
adicionar arquivo json.d.ts

```js
declare module "*.json" {
    const value: any;
    export default value;
}
```

criar jest.config.js

```javascript
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
```

renomear todos os arquivos .js para .tsx

## Instalando Mobx

```bash
yarn add mobx mobx-react
```

## Instalando React Navigation

```bash
yarn add @react-navigation/native @react-navigation/stack
babel-plugin-transform-decorators-legacy react-native-safe-area-context react-native-gesture-handler @react-native-community/masked-view react-native-reanimated react-native-screens
```

add to index.tsx

```js
import 'react-native-gesture-handler';
```

Adiciona plugin do babel `babel.config.js`

```js
 "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
```

criar pasta ´src´ na raiz

dentro de src

```text
/containers
/routes
/stores
```

## Mobx

* LifeCycle

![mobx](../images/mobx.png)
