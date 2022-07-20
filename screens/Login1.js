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

function Login1({navigation}) {

    const [value, setValue] = React.useState("one");

    console.log(value)
    
  return (
   <>

        {
            value=="one"?
            <ScrollView w="95%" margin="auto" height={windowHeight} pb={3} mx="auto">
                <Box alignItems="center" w="100%" mt={5} height={800}>
                    <Text fontWeight="900" fontSize={20}>Créez un compte (Pour moi)</Text>
                    <Text>Bon Log'ment vous donne une expérience personnalisée avec du contenu en lien avec votre activité et vos centres d'intérêt sur notre service</Text>
                    <Center h={100}>
                    <Radio.Group name="myRadioGroup" accessibilityLabel="Type de compte" value={value} onChange={nextValue => {
                            setValue(nextValue);
                        }}>
                        <Radio value="one" my={1}>
                            Pour vous *
                        </Radio>
                        <Radio value="two" my={1}>
                            Pour votre entreprise
                        </Radio>
                    </Radio.Group>
                    </Center>
                    <Input mx="3" mt={2} style={{border:"2px solid #132d4b"}} placeholder="Votre E-mail" w="100%" borderRadius={0} />
                    <Input mx="3" mt={2} style={{border:"2px solid #132d4b"}} placeholder="Votre numéro de téléphone" w="100%" borderRadius={0} />
                    <Input mx="3" mt={2} style={{border:"2px solid #132d4b"}} placeholder="Votre numéro Whatsapps" w="100%" borderRadius={0} />
                    <Input mx="3" mt={2} style={{border:"2px solid #132d4b"}} placeholder="Votre adresse" w="100%" borderRadius={0} />
                    <Input type='password' mx="3" mt={2} style={{border:"2px solid #132d4b"}} placeholder="Votre mot de passe" w="100%" borderRadius={0} />
                    
                    <Button style={style} borderRadius={0} small mt={2} primary w="100%">
                        <Text fontWeight={600} color="#fff">Valider </Text>
                    </Button>
                    
                    <Text mt={3}>Vous avez un compte ? <Text fontWeight={600} onPress={()=>{navigation.navigate('Login')}}>Me Connecter</Text></Text>
                </Box>
            </ScrollView>
            :
            <ScrollView w="95%" margin="auto" height={windowHeight} pb={3} mx="auto">
                <Box alignItems="center" w="100%" mt={5} height="800">
                    <Text fontWeight="900" fontSize={20}>Créez un compte (Pour entreprise)</Text>
                    <Text>Bon Log'ment vous donne une expérience personnalisée avec du contenu en lien avec votre activité et vos centres d'intérêt sur notre service</Text>
                    <Center h={100}>
                    <Radio.Group name="myRadioGroup" accessibilityLabel="Type de compte" value={value} onChange={nextValue => {
                            setValue(nextValue);
                        }}>
                        <Radio value="one" my={1}>
                            Pour vous *
                        </Radio>
                        <Radio value="two" my={1}>
                            Pour votre entreprise
                        </Radio>
                    </Radio.Group>
                    </Center>

                    <Input mx="3" mt={2} style={{border:"2px solid #132d4b"}} placeholder="Nom de votre entreprise" w="100%" borderRadius={0} />
                    <Input mx="3" mt={2} style={{border:"2px solid #132d4b"}} placeholder="Votre E-mail" w="100%" borderRadius={0} />
                    <Input mx="3" mt={2} style={{border:"2px solid #132d4b"}} placeholder="Votre numéro de téléphone" w="100%" borderRadius={0} />
                    <Input mx="3" mt={2} style={{border:"2px solid #132d4b"}} placeholder="Votre numéro Whatsapps" w="100%" borderRadius={0} />
                    <Input mx="3" mt={2} style={{border:"2px solid #132d4b"}} placeholder="Votre adresse" w="100%" borderRadius={0} />
                    <Input type='password' mx="3" mt={2} style={{border:"2px solid #132d4b"}} placeholder="Votre mot de passe" w="100%" borderRadius={0} />
                    
                    <Button style={style} borderRadius={0} small mt={2} primary w="100%">
                        <Text fontWeight={600} color="#fff">Valider </Text>
                    </Button>
                    <Text mt={3}>Vous avez un compte ? <Text fontWeight={600} onPress={()=>{navigation.navigate('Login')}}>Me Connecter</Text></Text>
                </Box>
            </ScrollView>
           
        }
     </>
  )
}

export default Login1