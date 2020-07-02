import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { HeaderBackground } from 'react-navigation-stack';

import Padrao from './src/estilo/padrao';
import Cadastro from './components/Cadastro';

class App extends React.Component {
  render(){
    return(
      <View style={Padrao.container}>
        <Cadastro/> 
      </View>
    );
  }
}

export default App; 