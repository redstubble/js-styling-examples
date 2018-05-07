import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'

function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  )
}

const Tabs = TabNavigator({
  Home: {
    screen: Home
  },
  Dashboard: {
    screen: Dashboard
  }

})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
