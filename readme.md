# tweet-something

[![build](https://github.com/abranhe/tweet-something/actions/workflows/ci.yml/badge.svg)](https://github.com/abranhe/tweet-something/actions/workflows/ci.yml)
[![Travis](https://travis-ci.com/abranhe/tweet-something.svg?branch=master)](https://travis-ci.com/abranhe/tweet-something)
[![npm](https://img.shields.io/npm/v/tweet-something.svg?logo=npm)](https://npmjs.org/tweet-something)

> Just because... I don't know

## Install

```
npm install tweet-something
```

## Usage

```js
import tweetSomethig from "tweet-something";

(async () => {
	const config = {
		message: "Hello Everyone",
		token: "****************",
		authToken: "*************",
		ct0: "*************",
	};

	await tweetSomethig(config);
	// tweet sent
})();
```

## API

### tweetSomethig(options)

#### options

Type: `Object`

The required parameters to send a tweet.

- `token`: All of the endpoints requires OAuth2 Authorizations. Note that they refuse OAuth2 Bearer tokens obtained from POST `oauth2/token`.
- `authToken`: You can get it from your browser's cookie
- `ct0`: You can get it from your browser's cookie

If you want to read more about those values, [check this](https://gist.github.com/stepney141/c161a83f02c42e161c905249733b9225).

## License

MIT © [Abraham Hernandez](https://abranhe.com)
