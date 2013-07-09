# qs

Yet another [query string](http://en.wikipedia.org/wiki/Query_string) parsing and formatting library for Node and the browser.

**qs** knows how to parse query strings:

```js
> qs.parse("foo=a&bar=1")
{"foo": "a", "bar": 1}
> qs.parse("bool&baz=false")
{"bool": true, "baz": false}
```

and how to format them:

```js
> qs.format({foo: "a", bar: 1})
"foo=a&bar=1"
> qs.format({bool: true, baz: false})
"foo=true&baz=false"
```
