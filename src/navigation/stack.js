import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/Home";
import AddEditScreen from "../screens/AddEdit";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Cat's list" }} />
      <Stack.Screen name="AddEdit" component={AddEditScreen} options={{ title: 'Add or edit cat details' }} />
    </Stack.Navigator>
  );
}

export default App;