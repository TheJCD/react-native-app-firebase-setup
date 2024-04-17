import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from '@react-native-firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "xxx-apikey-xxx",
  authDomain: "xxxxxx.firebaseapp.com",
  projectId: "xxxxx-45f51",
  storageBucket: "xxxxx.appspot.com",
  messagingSenderId: "xxxxx",
  appId: "xxxxx",
  databaseURL: "xxxx"
};


const app = initializeApp(firebaseConfig);

// Check if Firebase is initialized
if (app) {

  console.log('Firebase initialized successfully:', app);
} else {
  console.log('Firebase initialization failed');
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
