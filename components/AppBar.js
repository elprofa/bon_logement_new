import React from 'react';
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function AppBar() {
    return <Center>
        <StatusBar bg="#ccc" barStyle="light-content" />
        <Box safeAreaTop bg="#fff" />
        <HStack bg="#fff" px="1" py="1" shadow={2} justifyContent="space-between" alignItems="center" w="100%">
          <HStack alignItems="center" >
            <IconButton icon={<Icon size="lg" as={MaterialIcons} name="menu" color="#132d4b" />} />
           
          </HStack>
          <HStack>
            <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="lg" color="#132d4b" />} />
            <IconButton icon={<Icon as={MaterialIcons} name="search" size="lg" color="#132d4b" />} />
            <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="lg" color="#132d4b" />} />
          </HStack>
        </HStack>
      </Center>;
  }
  
  export default AppBar;