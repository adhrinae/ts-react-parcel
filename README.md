# Typescript + React + Parcel = ❤️

This repository has basic settings for buildling react application in Typescript.

The original source code of the provided example is [here](https://github.com/kentcdodds/advanced-react-patterns-v2/blob/master/src/exercises-final/11.extra-3.js).

## Built in settings

- React + ReactDOM (16.4.1)
- Typescript (with TSLint setting)
- Prettier + tslint-config-prettier
- Test configuration using Jest + Enzyme -> Changed to [react-testing-library](https://github.com/kentcdodds/react-testing-library)
- Parcel bundler (1.9.3)

## How to set up the project

```
git clone git@github.com:adhrinae/ts-react-parcel.git
cd ts-react-parcel
npm install

# or
yarn install (recommended)
```

## How to start development for the application

    npm run develop
    yarn develop

Execute the command and you can run & test the application on `localhost:1234` in the browser.

## How to build the application

    npm run build
    yarn build

The default output directory is `/dist`. You can change the destination wherever you want.

```
// package.json
// ...
"scripts": {
  // ...
  "build": "parcel build ./src/index.html -d YOUR_OUTPUT_DIR --public-url '/'" <- Change here
}
// ...
```

## How to test the application

    npm run test        # run test once
    npm run test:watch  # watch mode

    yarn test
    yarn test:watch

You have to create `__tests__` directory at the same location of files which you want to test.
Test file's name should be `SOURCE.test.ts/tsx/js` or `SOURCE.spec.ts/tsx/js`.

## Miscellaneous

This Project uses pre-commit hook for `prettier` and testing application.  
If you don't like it, remove the `husky` package from your repository and erase following scripts.

    npm rm husky
    yarn remove husky

then

```
// package.json
// ...
"husky": {
  "hooks": {
    "pre-commit": "npm run prettify && npm run test"
  }
},
// ...
```
