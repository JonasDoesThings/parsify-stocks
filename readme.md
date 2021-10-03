# Parsify Stocks

## About

This plugin allows to fetch the last price of a stock by using its ticker (e.g. $MSFT).

## Install

```
$ npm install parsify-stocks
```

## Usage

```js
import Parsify from '@parsify/core';
import parsifyStocksPlugin from 'parsify-stocks';

const parsify = new Parsify([
    parsifyStocksPlugin()
]);
```

## License

MIT
