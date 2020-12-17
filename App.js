import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  
  const [current, setCurrent] = useState('Home');

  const HomeScreen = () => {

    <View style={styles.container}>
      <Text>{Screen 1} </Text>
      <Text>Welcome to My App</Text>
    

    <Button
      title="Start!"
      onPress={() => setCurrent(DashBoardScreen)}    
    >
    </Button>
    </View>

  };

  // DasshBoard Screen
  const DashBoardScreen = () => {

    <View style={styles.container}>
      <Text>{Screen 2} </Text>
      <Text>Welcome to DashBoard</Text>
    

    <Button
      title="Back"
      onPress={() => setCurrent(HomeScreen)}    
    >
    </Button>
    </View>


  };

return current === 'Home' ? HomeScreen :  current;


//   return (
//       <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
