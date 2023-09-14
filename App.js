import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';


export default function App() {
  const name = "yingying";
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app on {name}!</Text> */}
      <Header appName={name}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
