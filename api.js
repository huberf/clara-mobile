var exports = module.exports;

var ReactNative = require('react-native');

var {
  Alert,
} = ReactNative;

var API_HEAD = 'http://localhost:2525/';

exports.sendMessage = async (text, callback) => {
  fetch(API_HEAD + 'converse', {
    method: "POST",
    headers: {
			'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      input: 'Hello',
    })
  })
  .then((response) => {response.text()})
  .then((info) => {
    callback(info);
  })
  .done()
}
