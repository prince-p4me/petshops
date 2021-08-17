import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  TextInput,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

const Contact = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [data, setSata] = useState([1, 23, 4, 56, 23, 45, 1, 45, 9, 17]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  };

  useEffect(() => {
    setError("");
  }, [email, message]);

  const submit = () => {
    if (!email) {
      setError("Please enter your email address ...");
      return
    }
    if (!message) {
      setError("Please enter your message ...");
      return
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        {/* <Text style={styles.title}>
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
        </TouchableOpacity> */}
        <TextInput style={styles.input}
          placeholder="Enter your email ..."
          placeholderTextColor="black"
          value={email}
          onChangeText={email => setEmail(email)}
          keyboardType="email-address" />
        <TextInput style={[styles.input, { height: 100 }]}
          placeholder="Enter your message ..."
          placeholderTextColor="black"
          value={message}
          multiline={true}
          onChangeText={message => setMessage(message)}
          keyboardType="default" />

        {error ? <Text style={{ fontSize: 16, fontWeight: "600", color: "red", marginVertical: 15, textAlign: "center" }}>{error}</Text> : null}

        <TouchableOpacity style={styles.submit} activeOpacity={.7}
          onPress={submit}>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
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
  },
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

export default Contact;
