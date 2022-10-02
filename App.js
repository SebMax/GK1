import { StatusBar } from 'expo-status-bar';
import TodoScreen from './components/TodoScreen';
import HomeScreen from './components/HomeScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Todo" component={TodoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App