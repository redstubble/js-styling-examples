import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
  },
  btn: {
    backgroundColor: 'black',

  },
  btnText: {
    color: 'green',
  },
});

function Home({ navigation } = this.props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home VIEW</Text>
      <TouchableOpacity style={[styles.btn]} onPress={() => { navigation.navigate('DrawerOpen'); }}>
        <Text style={styles.btnText}>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}


function Dashboard({ navigation } = this.props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('DrawerOpen'); }}>
        <Text style={styles.btnText}>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}

const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: () => <FontAwesome name="home" size={20} color="black" />,
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      drawerIcon: () => <FontAwesome name="dashboard" size={20} color="black" />,
    },
  },
});

const App = () => (
  <View style={{ flex: 1 }}>
    <Drawer />
  </View>
);

export default App;
