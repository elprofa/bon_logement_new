import React from 'react';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {Image} from 'react-native'
const style={
    position:"fixed",
    left:0,
    right:0,
    bottom:"120px",
    zIndex:"99999999",
}
function Footer() {
  const [selected, setSelected] = React.useState(1);
  return (
      <Box flex={1} bg="white" mt={3} safeAreaTop width="100%" alignSelf="center" style={style}>
        <Center flex={1}></Center>
        <HStack bg="#f7dd10"  alignItems="center" safeAreaBottom shadow={6}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
          <Center>
                <Image style={{width:50,height:50,margin:"auto"}} source={require("../assets/icon_info.png")} alt="BON LOGEMENT" />
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
                <Image style={{width:50,height:50,margin:"auto"}} source={require("../assets/icon_compte.png")} alt="BON LOGEMENT" />
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
            <Center>
                <Image style={{width:50,height:50,margin:"auto"}} source={require("../assets/icon_search.png")} alt="BON LOGEMENT" />
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
            <Center>
                <Image style={{width:50,height:50,margin:"auto"}} source={require("../assets/icon_contact.png")} alt="BON LOGEMENT" />
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 4 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(4)}>
            <Center>
                <Image style={{width:50,height:50,margin:"auto"}} source={require("../assets/icon_ajout.png")} alt="BON LOGEMENT" />
            </Center>
          </Pressable>
        </HStack>
      </Box>
  )
}

export default Footer
    