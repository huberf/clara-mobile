var React = require('react');
var ReactNative = require('react-native');
import { Actions } from 'react-native-router-flux';

var {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  WebView,
  TouchableHighlight,
  Alert,
  TabBarIOS,
} = ReactNative;

var {
  Component
} = React;

const options = {};

var api = require('./api');

import { GiftedChat } from 'react-native-gifted-chat';

class Messenger extends Component {
  constructor(props) {
    super(props);
    this.props.title = this.props.messageData.name;
    this.state = {messages: []};
    this.onSend = this.onSend.bind(this);
  }
  componentWillMount() {
    AsyncStorage.getItem('id_token', (err, data) => {
      this.props.messageData.messages.reverse();
      var messages = this.props.messageData.messages.map((e, index, all) => {
        return {
          _id: index,
          text: e.text,
          createdAt: e.timestamp,
          user: {
            _id: e.sender === data ? 1 : 0,
            name: this.props.messageData.name,
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        };
      });
      this.setState({
        messages: messages,
      });
    });
  }
  onSend(messages = []) {
    var addMessage = (text = 'None') => {
			var toAppend = {
        _id: 1,
        text: text,
        createdAt: Date.now(),
        user: {
          _id: 2,
          name: 'Clara',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
        image: 'https://facebook.github.io/react/img/logo_og.png',
        // additional custom parameters
      }
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, toAppend)
        }
      });
    }
    api.sendMessage(
      messages[0].text,
      addMessage
    );
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

module.exports = Messenger;
