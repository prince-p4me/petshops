import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [data, setSata] = useState([1, 23, 4, 56, 23, 45, 1, 45, 9, 17]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Text style={styles.title}>
          Remove the duplicate values by clicking the button provided at the bottom
        </Text>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity style={styles.button} activeOpacity={.7}
          onPress={() => setSata([...new Set(data)])}>
          <Text style={{ fontSize: 16 }}>Remove Duplicate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: "lightblue"
  },
  title: {
    fontWeight: "600", paddingVertical: 50,
    fontSize: 16, textAlign: "center"
  },
  container: {
    flex: 1, padding: 10,
    backgroundColor: "white",
    alignItems: "center",
  },
  item: {
    height: 50, width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    marginHorizontal: 7,
    borderWidth: 1
  },
  itemText: { color: "white", fontWeight: "600", fontSize: 16 }
});

export default App;
