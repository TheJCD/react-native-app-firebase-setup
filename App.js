import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


  //import { initializeApp } from 'firebase/app';
  import { initializeApp } from '@react-native-firebase/app';


// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }

  // Check if Firebase is initialized
  //console.log('Firebase app:', firebase.app().name);



// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA2cFwjX3L8KLHws5YCqRwAPi2d7zx42Ec",
  authDomain: "findmypt-45f51.firebaseapp.com",
  projectId: "findmypt-45f51",
  storageBucket: "findmypt-45f51.appspot.com",
  messagingSenderId: "448644522866",
  appId: "1:448644522866:web:93dddc43ed502bedc273eb",
  databaseURL: ""
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
