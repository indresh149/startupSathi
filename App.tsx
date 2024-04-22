/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Auth/loginScreen';
import HomeScreen from './src/screens/Auth/homeScreen';
import SignUpScreen from './src/screens/Auth/signUpScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StartUpScreen from './src/screens/home/startupScreen';
import CofounderScreen from './src/screens/home/cofounderScreen';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  function AuthStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#d5e4ef'},
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }

  function AuthenticatedStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#53C1BA',
        }}>
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerTintColor: '#53C1BA',
          }}
        />

        <Stack.Screen
          name="startup"
          component={StartUpScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="cofounder"
          component={CofounderScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }

  let islogin = true.toString();
  function Navigation() {
    useEffect(() => {
      async function fetchToken() {
        const storedToken = await AsyncStorage.getItem('islogin');
        if (storedToken) {
          console.log(storedToken);
          islogin = storedToken;
        }
      }

      fetchToken();
    }, []);

    return (
      <NavigationContainer>
        {islogin !== 'true' ? <AuthStack /> : <AuthenticatedStack />}
      </NavigationContainer>
    );
  }

  function Root() {
    return <Navigation />;
  }

  return (
    <>
      <Root />
    </>
  );
}

export default App;
