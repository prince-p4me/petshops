import { Alert } from "react-native";

export const showAlert = (title, msg, okEvent, cancelEvent, dismissEvent) => {
  Alert.alert(title, msg,
    [
      {
        text: "Cancel",
        onPress: () => {
          console.log("Cancel Pressed");
          if (cancelEvent) cancelEvent();
        },
        style: "cancel"
      },
      {
        text: "OK",
        onPress: () => {
          console.log("OK Pressed");
          if (okEvent) okEvent();
        }
      }
    ], {
    cancelable: true,
    onDismiss: () => {
      console.log("Dismissed!");
      if (dismissEvent) dismissEvent();
    }
  })
}