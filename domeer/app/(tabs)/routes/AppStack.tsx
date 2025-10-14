import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator;

const AppStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack;

const styles = StyleSheet.create({})