var React = require('react');
var ReactNative = require('react-native');
var t = require('tcomb-form-native');
import { Actions } from 'react-native-router-flux';

var {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} = ReactNative;

var {
  Component
} = React;

var STORAGE_KEY = 'id_token';

var Form = t.form.Form;

var Person = t.struct({
  server: t.String,
});

const options = {
	fields: {
		server: {
      placeholder: 'http://localhost:2525/',
      autoCapitalize: 'none',
      autoCorrect: false,
		}
	}
};

var api = require('./api');

export default class loginPage extends Component {
	constructor(props) {
    super();
    this.state = {
      visible: false
    };
  }

  render() {
    var saveHead = () => {
      var data = this.refs.form.getValue();
      if (data) {
        AsyncStorage.setItem('API_HEAD', data.server);
        Actions.messengerPage({messageData: {name: 'Clara', messages: [
          {
            text: 'Hi! I\'m online.',
            timestamp: Date.now(),
            sender: 'Clara',
          }
        ]}});
      }
    }
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Form
            ref="form"
            type={Person}
            options={options}
          />
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.button} onPress={saveHead} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <Text style={styles.buttonText}>If you experience trouble email nhuberfeely@gmail.com</Text>
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
