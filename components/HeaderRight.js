import React from 'react';
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HeaderRight({navigation, route}) {

    const mynavigation=navigation.navigation;

    return <>
        <HStack>
            <IconButton icon={<Icon as={MaterialIcons} onPress={() => mynavigation.navigate('Favoris')} name="favorite" size="lg" color="#132d4b" />} />
            <IconButton icon={<Icon as={MaterialIcons} name="search" size="lg" color="#132d4b" />} />
            <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="lg" color="#132d4b" />} />
          </HStack>
      </>;
  }
  
  export default HeaderRight;