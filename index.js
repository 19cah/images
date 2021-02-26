const axios = require('axios');
const qs = require('query-string');

async function tweet({ token, message = 'Hello World', ct0, auth_token, ...options }) {
  if (!token || !ct0 || !auth_token) {
    throw Error('Missing required parameters');
  }

  const data = qs.stringify({
    skip_status: '1',
    include_cards: '1',
    include_can_dm: '1',
    include_blocking: '1',
    include_mute_edge: '1',
    include_blocked_by: '1',
    include_reply_count: '1',
    include_followed_by: '1',
    include_want_retweets: '1',
    include_can_media_tag: '1',
    include_profile_interstitial_type: '1',
    batch_mode: 'off',
    trim_user: 'false',
    tweet_mode: 'extended',
    cards_platform: 'Web-12',
    include_quote_count: 'true',
    simple_quoted_tweet: 'true',
    include_ext_alt_text: 'true',
    include_ext_media_color: 'true',
    auto_populate_reply_metadata: 'false',
    include_ext_media_availability: 'true',
    status: message,
    ...options,
  });

  const config = {
    method: 'post',
    url: 'https://twitter.com/i/api/1.1/statuses/update.json',
    headers: {
      Authorization: `Bearer ${token}`,
      authority: 'twitter.com',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9',
      'content-length': '504',
      'content-type': 'application/x-www-form-urlencoded',
      cookie: `auth_token=${auth_token}; ct0=${ct0};`,
      origin: 'https://twitter.com',
      referer: 'https://twitter.com/compose/tweet',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'sec-gpc': '1',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
      'x-csrf-token': ct0,
      'x-twitter-active-user': 'yes',
      'x-twitter-auth-type': 'OAuth2Session',
      'x-twitter-client-language': 'en',
    },
    data: data,
  };

  return await axios(config)
    .then(data => {
      console.log(data.data)
    })
    .catch((error) => {
      console.log('error', error)
      new Error(`Something went wrong. ${error}`)
    });
}

module.exports = tweet;