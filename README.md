# My watchlist

Simple movie database application using React and The Movie Database API.

Live demo: https://my-watchlist.netlify.app/

-   [File structure](#file-structure)
-   [Installation](#installation)
-   [Development](#development)
-   [Built with](#built-with)

## File structure

```text
src
├── components          # Feature first grouped components
├── hooks               # Hooks used across whole application
├── pages               # Top level views
├── utils               # Tools and utilities
```

## Installation

Install latest LTS version of [Node](https://nodejs.org/en/).

Install latest version of yarn.

```bash
npm install -g yarn
```

Go to settings. Open `TypeScript: Select TypeScript version`. Pick `Use workspace version` option.

Install Visual Studio Code recommended extensions. Open Extensions tab and type `@recommended`. Install all of them.

Link dependencies. No need to run it later due to the PnP mode.

```bash
yarn install
```

Install husky - Git hooks.

```bash
yarn postinstall
```

Request an API key from [The Movie Database API](https://developers.themoviedb.org/3/getting-started/authentication).

Start the project.

```bash
yarn start
```

## Development

Preferably in Visual Studio Code with ESLint and Prettier installed. Commits are written in [Conventional Commits](https://www.conventionalcommits.org/).

Scripts

```bash
yarn
yarn install
yarn start
yarn lint
yarn lint:fix
yarn test
yarn test:coverage
yarn test:watch
```

Build with

```bash
yarn build
```

## Built with

[React](https://reactjs.org/)

[Create React App](https://create-react-app.dev/)

[Yarn 2 Zero-Installs](https://yarnpkg.com/features/zero-installs)

[MUI](https://mui.com/)

[Emotion](https://emotion.sh/docs/introduction)

[Jest](https://jestjs.io/)

[Testing Library React](https://testing-library.com/)

[Trunk based development](https://trunkbaseddevelopment.com/)
