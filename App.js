import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'

class FlexboxExamples extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.containerOne}>
          <View style={styles.boxOne}/>
          <View style={styles.boxOne}/>
          <View style={styles.boxOne}/>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={[styles.containerTwo, {flexDirection: 'row'}]}>
            <View style={styles.boxTwoOne}/>
            <View style={styles.boxTwoOne}/>
            <View style={styles.boxTwoOne}/>
          </View>
          <View style={[styles.containerTwo, {flexDirection: 'column',}]}>
            <View style={styles.boxTwoTwo}/>
            <View style={styles.boxTwoTwo}/>
            <View style={styles.boxTwoTwo}/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerOne: {
    flex: 1,
    justifyContent: 'space-around', // ''flex-start'' || center' || 'flex-end' || 'space-around' || 'space-between'
    alignItems: "stretch", // flex-start center flex-end stretch(without specified width or height)
    
  },
  boxOne: {
    height: 50,
    // width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  },
  containerTwo: {
    flex: 1,
   // flexDirection: 'column', // 'column' || 'row'
   justifyContent: 'space-between', // ''flex-start'' || center' || 'flex-end' || 'space-around' || 'space-between'
   alignItems: "stretch" // flex-start center flex-end stretch(without specified width or height)
  },
  boxTwoOne: {
    //height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  },
  boxTwoTwo: {
    height: 50,
    //width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})

export default FlexboxExamples;