import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';

import SignUpScreen from "../app/(tabs)/cadastro/SignUpScreen";
import LoginScreen from "../app/(tabs)/login/LoginScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Signup" component={SignUpScreen}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack;

const styles = StyleSheet.create({})