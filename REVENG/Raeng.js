import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

import AppHeader from '../screen/AppHeader';
export default class Raeng extends Component {
  render() {
    return (
      <View>
        <AppHeader />
      <View style={styles.container}>

        <Text> </Text>
        <Text style={styles.points}>1) {"\n"}Verb :

verb is an action word. Examples of verb are eat, drink, swim etc</Text>
        <Text> </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Reng')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
  points:{
    fontSize: 21
  },
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"purple",
    margin: 10,
    width: 200,
    height: 50,
  }
})