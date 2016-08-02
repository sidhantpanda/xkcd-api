# xkcd-api
An API wrapper to fetch xkcd comics. Includes CLI too!

```
npm install xkcd-api
```

```javascript
var xkcd = require('xkcd-api');
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
    console.log(reponse);
  }
});
```

### <a name="get_comic"></a>Get a particular comic
```javascript
xkcd.get('comic-id', function(error, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(reponse);
  }
});
```

### <a name="get_random"></a>Get a random comic
```javascript
xkcd.random(function(error, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(reponse);
  }
});
```

### <a name="get_latest"></a>Get the latest comic (CLI)
```
xkcd-api
xkcd-api -l
xkcd-api --latest
```

### <a name="get_comic"></a>Get a particular comic (CLI)
```
xkcd-api -n 1714
xkcd-api --number 1714
```

### <a name="get_random"></a>Get a random comic (CLI)
```
xkcd-api -r
xkcd-api --random
```

---
### Submit issues
You can raise an issue in this repo or mail me at sidhant@hashexclude.com
