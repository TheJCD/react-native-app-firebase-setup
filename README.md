# React Native app file setup with firebase


This is a repo to get a react native project up and running and working with a Firebase account and linking firebase with your react native android app. This doesn't include a setup for iOS or for the web.

# How it works

1. Use npx expo prebuild to create native directories
2. you need a local.properties file under the generated /android folder with this line sdk.dir = /Users/yourusername/Library/Android/sdk
3. you need to make sure the applicationId and namespace in app > src > build.gradle has the correct name as the google-services.json name
4. lastly add this in android/build.gradle classpath 'com.google.gms:google-services:4.4.1'. Then run ./gradlew clean to sync files and run usual npx dev client to make sure the app runs on phone and emulator

# Troubleshooting

1. 'SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable'

Refer to step 2 in 'How it works'

2. Error: You attempted to use a firebase module that's not installed on your Android project by calling firebase.app(). Ensure you have:

- imported the 'io.invertase.firebase.app.ReactNativeFirebaseAppPackage' module in your 'MainApplication.java' file.
- Added the 'new ReactNativeFirebaseAppPackage()' line inside of the RN 'getPackages()' method list. See http://invertase.link/android for full setup instructions.

Add the two lines as mentioned in the terminal. I had to add it under MainApplication.kt and then do an EAS build which then fixed it.
