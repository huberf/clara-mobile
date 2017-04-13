/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  Actions,
  ActionConst,
} from 'react-native-router-flux';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import messenger from './messenger';
import setupPage from './setup';
import startupPage from './startup';

export default class claraApp extends Component {
  render() {
    return (
        <Router>
          <Scene key="root" unmountScences={false}>
            <Scene key="startupPage" type={ActionConst.REPLACE} component={startupPage} title="Loading..." initial={true} />
            <Scene key="setupPage" type={ActionConst.REPLACE} component={setupPage} title="Config" />
            <Scene
              key="messengerPage"
              type={ActionConst.REPLACE}
              title="Messenger"
              //rightButtonImage="http://www.clker.com/cliparts/T/Y/8/C/N/L/gear-icon-hi.png"
              //getRightTitle={() => {return(<Text>Hello</Text>)}}
              rightTitle="X"
              onRight={() => {Actions.setupPage();}}
            >
              <Scene title="Messenger" key="messengerMain" initial={true} component={messenger} />
            </Scene>
          </Scene>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('claraApp', () => claraApp);
