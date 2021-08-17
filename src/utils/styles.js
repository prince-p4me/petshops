import { StyleSheet } from "react-native";
import Constants from "./Constants";
const styles = StyleSheet.create({
  item: {
    width: "100%", height: 70,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: Constants.white,
    borderColor: "lightgrey",
    marginBottom: 15
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 14
  },
  addBtn: {
    width: 50, height: 50,
    position: "absolute",
    bottom: 30, right: 20
  },
  submit: {
    width: "100%", height: 45,
    backgroundColor: "green",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "100%", height: 45,
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 15,
    borderRadius: 5,
    paddingStart: 15
  }
})

export default styles;