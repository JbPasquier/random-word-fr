# random-word-fr

> Get a random French word from the [Letterpress Word List](https://github.com/atebits/Words/blob/master/Words/fr.txt)

## Usage

```
$ npm install --save random-word-fr
```

```js
const randomWordFR = require('random-word-fr');

randomWordFR();
//=> 'montagne'

randomWordFR();
//=> 'fleuve'
```


## CLI

```
$ npm install --global random-word-fr
```

```
$ random-word-fr --help

  Example
    $ random-word-fr
    montagne
```


### Tip

Use it to generate project/release names:

```
$ echo $(random-word-fr)-$(random-word-fr)
montagne-noire
```


## License

MIT © Jean-Baptiste Pasquier

## Based on

[word-list](https://github.com/sindresorhus/word-list)

[random-word](https://github.com/sindresorhus/random-word)
