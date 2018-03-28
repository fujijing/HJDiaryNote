'use strict';
 
import {
  Text,
  View,
  StyleSheet,
  AppRegistry,
} from 'react-native';

import React,{
  Component
} from 'react'
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});
 
class HJDiaryNote extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a simple application.</Text>
      </View>
    )
  }
}
 
AppRegistry.registerComponent('HJDiaryNote', () => HJDiaryNote);