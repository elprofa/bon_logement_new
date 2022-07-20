import React, { useState } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import AppBar from "./components/AppBar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Favoris from "./screens/favoris";
import HeaderLeft from "./components/HeaderLeft";
import HeaderRight from "./components/HeaderRight";
import Footer from "./components/Footer";
import Annonce from "./screens/Annonce";
import Login from "./screens/Login";
import Login1 from "./screens/Login1";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const Stack = createNativeStackNavigator();

// extend the theme
export const theme = extendTheme({ config });

export default function App() {

  const [menuState, SetmenuState] = useState(false);
  
  const handleMenu=()=>{

  }

  return (
    <NativeBaseProvider>
      
      <NavigationContainer bg="#fff">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={
          (props) => (
              {
                title: ' Bienvenue ',
                headerLeft: () => <HeaderLeft navigation={props} /> ,
                headerRight:() => <HeaderRight navigation={props}  />
              }
            )
          } />
          <Stack.Screen name="Favoris" component={Favoris} options={
          (props) => (
              {
                title: ' Favoris ',
                headerLeft: () => <HeaderLeft navigation={props} /> ,
                headerRight:() => <HeaderRight navigation={props}  />
              }
            )
          } />
          <Stack.Screen name="Annonce" component={Annonce} options={
          (props) => (
              {
                title: ' Annonce ',
                headerLeft: () => <HeaderLeft navigation={props} /> ,
                headerRight:() => <HeaderRight navigation={props}  />
              }
            )
          } />
          <Stack.Screen name="Login" component={Login} options={
          (props) => (
              {
                title: ' Log in ',
                headerLeft: () => <HeaderLeft navigation={props} /> ,
                headerRight:() => <HeaderRight navigation={props}  />
              }
            )
          } />

          <Stack.Screen name="Login1" component={Login1} options={
          (props) => (
              {
                title: ' Log in ',
                headerLeft: () => <HeaderLeft navigation={props} /> ,
                headerRight:() => <HeaderRight navigation={props}  />
              }
            )
          } />
      </Stack.Navigator>
       
      </NavigationContainer>
      <Center w="100%">
        <Footer/>
      </Center>
    </NativeBaseProvider>
  );
}
