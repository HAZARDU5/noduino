# Noduino

Welcome to the awesome Noduino project! All information is available at:

[http://sbstjn.github.io/noduino/](http://sbstjn.github.io/noduino/)

## Installation

Run the following to install:

```
npm install
node_modules/.bin/bower install
```

## Running

1.  Run the following to initialize web server:

    ```
    npm start
    ```

    OR

    ```
    npm start YOUR_IP
    ```

    where `YOUR_IP` is the address of your computer on the network.

2.  Then browse to [http://localhost:3001](http://localhost:3001)

## Building CSS

*   Run `npm run styles:watch` to watch for changes to the `scss` source (this automatically happens when running `npm start`)

*   Run `npm run styles:build` to manually trigger a build of `main.css` from the `scss` source.

## Updating jQuery / require.js

*   Run `npm run build:require-jquery` to update `require-jquery.js` with the versions currently installed via `npm`.