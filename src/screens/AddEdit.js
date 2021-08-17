import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from "../utils/styles";
import * as Actions from "../redux/action"
import * as Utility from "../utils/Utility";
import Toast from 'react-native-simple-toast';
import { useNavigation } from "@react-navigation/native";


const AddEdit = () => {
  const navigation = useNavigation();
  const data = useSelector(state => state.getCat);
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [desc, setDescription] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data.id) {
      setName(data.name);
      setBreed(data.breed);
      setDescription(data.desc);
      navigation.setOptions({ title: "Edit this item" });
    } else navigation.setOptions({ title: "Add new item" });
  }, []);

  useEffect(() => {
    setError("");
  }, [name, breed, desc]);

  const submit = () => {
    if (!name) {
      setError("Please enter your name . . .");
      return
    }
    if (!breed) {
      setError("Please enter your breed ...");
      return
    }
    if (!desc) {
      setError("Please enter your cat details ...");
      return
    }
    if (data.id) {
      Utility.showAlert(
        "Are you sure?",
        "Do you want to update this?",
        () => {
          dispatch(Actions.updateCat({
            id: data.id,
            name, breed, desc
          }));
          navigation.goBack();
          Toast.showWithGravity("Item has been updated . . .", Toast.SHORT, Toast.BOTTOM);
        }
      );
    } else {
      dispatch(Actions.setCatsList({ name, breed, desc }));
      Toast.showWithGravity("Item has been added . . .", Toast.SHORT, Toast.BOTTOM);
      navigation.goBack();
    };
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="Enter your name ..."
        placeholderTextColor="black"
        value={name}
        onChangeText={name => setName(name)}
      />
      <TextInput style={styles.input}
        placeholder="Enter your breed ..."
        placeholderTextColor="black"
        value={breed}
        onChangeText={breed => setBreed(breed)}
        keyboardType="default" />

      <TextInput style={[styles.input, { height: 150 }]}
        placeholder="Enter your breed ..."
        placeholderTextColor="black"
        value={desc}
        multiline={true}
        onChangeText={desc => setDescription(desc)}
        keyboardType="default" />

      {error ? <Text style={{ fontSize: 16, fontWeight: "600", color: "red", marginVertical: 15, textAlign: "center" }}>{error}</Text> : null}

      <TouchableOpacity style={styles.submit} activeOpacity={.7}
        onPress={submit}>
        <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>{data.id ? "Update" : "Add"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddEdit;