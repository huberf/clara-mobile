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
      input: text,
    })
    //body: 'input=Hello'
  })
  .then((response) => {callback(response._bodyText)})
  /*
  .then((info) => {
    Alert.alert('I: ' + info);
    callback(info);
  })
  */
  .catch((error) => {
    Alert.alert('Error: ' + error);
  })
  .done()
}
