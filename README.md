# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
create react native app
npx create-expo-app@latest -e with-router ./
npm install expo-font axios react-native-dotenv
npm install -g expo-cli
expo-cli start --tunnel


#publish
expo publish
npm install --global eas-cli
eas login
eas build:configure
eas build --platform android 
eas build -p android --profile preview


```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
