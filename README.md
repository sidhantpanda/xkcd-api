# xkcd-api
An API wrapper and CLI tool to fetch xkcd comics.

```
$ npx xkcd-api
```

```
$ npm install xkcd-api
```

```javascript
$ var xkcd = require('xkcd-api');
```

### APIs available
* [Get the latest comic](#get_latest)
* [Get a particular comic](#get_comic)
* [Get a random comic](#get_random)

### CLI equivalent
* [Get the latest comic](#get_latest_cli)
* [Get a particular comic](#get_comic_cli)
* [Get a random comic](#get_random_cli)

### <a name="get_latest"></a>Get the latest comic
```javascript
xkcd.latest(function(error, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(response);
  }
});
```

### <a name="get_comic"></a>Get a particular comic
```javascript
xkcd.get('comic-id', function(error, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(response);
  }
});
```

### <a name="get_random"></a>Get a random comic
```javascript
xkcd.random(function(error, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(response);
  }
});
```

## CLI Features
Please make sure you've installed the package globally or are running it with npx.

### <a name="get_latest_cli"></a>Get the latest comic (CLI)
```
xkcd-api
xkcd-api -l
xkcd-api --latest
```

### <a name="get_comic_cli"></a>Get a particular comic (CLI)
```
xkcd-api -n 1714
xkcd-api --number 1714
```

### <a name="get_random_cli"></a>Get a random comic (CLI)
```
xkcd-api -r
xkcd-api --random
```

---
### Contributors
[Štefan Jarina](https://github.com/stefanjarina)

[justchen1369](https://github.com/justchen1369)

---
### Submit issues
You can raise an issue in this repo or mail me at sidhant@hashexclude.com
