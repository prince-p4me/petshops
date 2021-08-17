
import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  View,
  Text,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import Constants from "../utils/Constants";
import Images from "../utils/Image";
import styles from "../utils/styles";
import * as Navigation from "../navigation/navigation";
import * as Actions from "../redux/action"
import * as Utility from "../utils/Utility";

const Home = () => {
  const data = useSelector(state => state.getCatsList);
  const dispatch = useDispatch();

  // dispatch(Actions.setCatsList([]));
  // useEffect(() => {
  // }, []);

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.item} activeOpacity={.7}
        onPress={() => {
          dispatch(Actions.setCat(item));
          Navigation.navigate("AddEdit");
        }}>
        <Image source={Images.cat} style={{ width: 50, height: 50 }}></Image>
        <View style={{ flex: 1, height: "100%", paddingStart: 10, paddingVertical: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: "600" }}>{item.name}</Text>
          <Text style={{ fontSize: 12, fontWeight: "400" }} numberOfLines={2}>{item.desc}</Text>
        </View>
        <TouchableOpacity style={{ width: 40, height: "100%", justifyContent: "center", alignItems: "center" }}
          onPress={() => {
            Utility.showAlert(
              "Are you sure?",
              "Do you want to delete this?",
              () => {
                dispatch(Actions.deleteCat(index));
              }
            )
          }}>
          <Image source={Images.delete} style={{ width: 30, height: 30 }}></Image>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { padding: 0 }]} >
      <FlatList
        data={data}
        contentContainerStyle={{ flexGrow: 1, width: Constants.windowWIdth }}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.addBtn} activeOpacity={.7}
        onPress={() => {
          dispatch(Actions.setCat([]));
          Navigation.navigate("AddEdit")
        }}>
        <Image source={Images.add} resizeMode="contain" style={{ width: "100%", height: "100%" }} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;