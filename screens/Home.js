import React from "react";
import { Center, NativeBaseProvider,Button,Text,HStack,
    Box,ScrollView } from "native-base";
import {
    Image,
    Dimensions
} from 'react-native'
import FormSearch from "../components/form_search";
 const windowWidth = Dimensions.get('window').width;
const style={
    background:"#132d4b",
    color:"#fff",
    fontWeight:"600"
}

function Home({ navigation }) {    

    const windowWidth = Dimensions.get('window').width;
     const windowHeight = Dimensions.get('window').height;

  return (
    <Center bg="#fff">
        <Image style={{width:200,height:100}} source={require("../assets/logo.png")} alt="BON LOGEMENT" />
         <Image style={{width:"95%",height:150}} source={require("../assets/accueil.jpg")} alt="BON LOGEMENT" />
         <FormSearch />

            <ScrollView w="95%" margin="auto" height={580} pb={3} mx="auto">
                <Button style={style} borderRadius={0} small mt={5} primary w="100%">
                    <Text fontWeight={600} color="#fff">Deposer une annonce </Text>
                </Button>
                <HStack space={3} justifyContent="center" w="100%" mt={5}>
                    <Center w={windowWidth/2}>
                        <Image style={{width:"55%",height:80,margin:"auto"}} mx="auto" source={require("../assets/icone_louer.png")} alt="BON LOGEMENT" />
                        <Text fontWeight={600}>Location</Text>
                        <Text fontWeight={300}>Je veux Louer</Text>
                    </Center>
                    <Center w={windowWidth/2}>
                        <Image style={{width:"55%",height:80,margin:"auto"}} source={require("../assets/icone_louer.png")} alt="BON LOGEMENT" />
                        <Text fontWeight={600}>Vente</Text>
                        <Text fontWeight={300}>Je veux achter</Text>
                    </Center>
                </HStack>
                <HStack space={3} justifyContent="center" w="100%" mt={5}>
                    <Center w={windowWidth/2}>
                        <Image style={{width:"55%",height:80}} source={require("../assets/icone_louer.png")} alt="BON LOGEMENT" />
                        <Text fontWeight={600}>Location</Text>
                        <Text fontWeight={300}>J'en cherche</Text>
                    </Center>
                    <Center w={windowWidth/2}>
                        <Image style={{width:"55%",height:80}} source={require("../assets/icone_louer.png")} alt="BON LOGEMENT" />
                        <Text fontWeight={600}>Plan & Devis</Text>
                        <Text fontWeight={300}>Pour ma maison</Text>
                    </Center>
                </HStack>
            </ScrollView>
    </Center>
  )
}

export default Home

