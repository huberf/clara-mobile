var React = require('react');
var ReactNative = require('react-native');
import { Actions } from 'react-native-router-flux';

var {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  NetInfo,
} = ReactNative;

var {
  Component
} = React;

const options = {};

var api = require('./api');

export default class loginPage extends Component {

  render() {
    if (true) {
      Actions.messengerPage({messageData: {name: 'Clara', messages: [
        {
          text: 'Hi! I\'m online.',
          timestamp: Date.now(),
          sender: 'Clara',
        }
      ]}});
    }
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}></Text>
        </View>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});
