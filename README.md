# Typescript + React + Parcel = ❤️ 

This repository has basic settings for buildling react application in Typescript.

The original source code of the provided example is [here](https://github.com/kentcdodds/advanced-react-patterns/blob/master/14-use-control-props/index.html).

## Built in settings

- React + ReactDOM
- Typescript(with TSLint setting)
- Prettier + tslint-config-prettier
- Parcel bundler


## How to develop your application

    npm run develop

Execute the command and you can run & test the application on `localhost:1234` in your browser.

## How to build your application

    npm run build

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

