import { Alert, Keyboard } from "react-native";

const AlertSearch = (message, callback) => {
  Keyboard.dismiss();
  Alert.alert(
    "Choose priority",
    message,
    [
      {
        text: "Low",
        onPress: () =>
          callback({
            title: message,
            priority: 0,
          }),
      },
      {
        text: "High",
        onPress: () =>
          callback({
            title: message,
            priority: 1,
          }),
      },
    ],
    { cancelable: false }
  );
};

export default AlertSearch;
