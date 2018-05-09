import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

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
      <TouchableOpacity style={[styles.btn]} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.btnText}>To Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}


function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <TouchableOpacity style={styles.btn} >
        <Text style={styles.btnText}>To Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = StackNavigator({
  Home: {
    screen: Home,
    navigation: {
      title: 'Home',
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigation: {
      title: 'Dashboard',
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: 'green',
      },

    },
  },
});

const App = () => (
  <View style={styles.container}>
    <Stack />
  </View>
);

export default App;
