import React from 'react'
import {
    Box,
    Center,
    Text,
    Input,
    ScrollView,
    Button,
    Image,
    Pressable,
    Radio
} from 'native-base'
import {Dimensions} from 'react-native'

const style={
    background:"#132d4b",
    color:"#fff",
    fontWeight:"600"
}

const windowHeight = Dimensions.get('window').height;

function Login({navigation}) {

   

    console.log(navigation)
  return (
    <ScrollView w="95%" margin="auto" height={windowHeight} pb={3} mx="auto">
        <Box alignItems="center" w="100%" mt={5}>
            <Text fontWeight="900" fontSize={20}>Créez un compte (Pour moi)</Text>
            <Text>Bon Log'ment vous donne une expérience personnalisée avec du contenu en lien avec votre activité et vos centres d'intérêt sur notre service</Text>
            <Input mx="3" mt={2} style={{border:"2px solid #132d4b"}} placeholder="Votre E-mail" w="100%" borderRadius={0} />
            <Input type="password" mx="3" mt={2} style={{border:"2px solid #132d4b"}} placeholder="Votre password" w="100%" borderRadius={0} />
                          
            <Button style={style} borderRadius={0} small mt={2} primary w="100%">
                <Text fontWeight={600} color="#fff"> Valider </Text>
            </Button>
            <Text mt={3}>Vous n'avez pas un compte ? <Text fontWeight={600} onPress={()=>{navigation.navigate('Login1')}}>Créez un compte</Text></Text>
        </Box>
    </ScrollView>
  )
}

export default Login