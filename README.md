queued.js
=========

Queue implementation in TypeScript for Node and the browser, based on [Stacked.js](https://github.com/jesobreira/stack.js).

Queued are data containers that can be read from bottom, but written at the top. This library allows you to use and manage queues, limited or not, persistent or not.

Install
-------

```
npm i queued.js
```

Usage
-----

Everything works much like [Stacked.js](https://github.com/jesobreira/stack.js#readme). You can follow the docs, with just a change:

* The `.pop()` method is not available
* Use `.first()` instead, to access the first item

License
-------

MIT
