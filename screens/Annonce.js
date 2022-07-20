import React from 'react'
import {
    Box,
    Center,
    Text,
    Input,
    ScrollView,
    Button,

    Radio,
    Pressable
} from 'native-base'
import {Dimensions,Image} from 'react-native'

const style={
    background:"#132d4b",
    color:"#fff",
    fontWeight:"600"
}

const windowHeight = Dimensions.get('window').height;

function Annonce() {

    const [value, setValue] = React.useState("one");
    const [cliquer, setCliquer] = React.useState(0);

  return (
    <ScrollView w="95%" margin="auto" height={windowHeight} pb={3} mx="auto">

        {
            cliquer===0 ?
            <Box alignItems="center" w="100%" mt={5} >
                <Text fontWeight="900" my={5} fontSize={20}>Deposez votre annonce</Text>
                <Text fontWeight="600">Quel type d'annonce voulez-vous poster ?</Text>
            <Center h={100} mt={5} mb={5}>
                <Radio.Group name="myRadioGroup" accessibilityLabel="Type de compte" value={value} onChange={nextValue => {
                        setValue(nextValue);
                    }}>
                    <Radio value="one" my={1}>
                        Location immobilière *
                    </Radio>
                    <Radio value="two" my={1}>
                        Vente immobilière
                    </Radio>
                    <Radio value="tree" my={1}>
                       Annonce ouvrier/Ouvrière
                    </Radio>
                    <Radio value="four" my={1}>
                       Plan et Devis
                    </Radio>
                </Radio.Group>
            </Center>
            <Button onPress={()=>{setCliquer(1)}} mt={3} style={style} borderRadius="0" w="100%">
                <Text fontWeight={600} color="#fff"> Continuer </Text>
            </Button> 
        </Box>
        :
        <Box alignItems="center" w="100%" mt={5} >
            <Text fontWeight="900" fontSize={20} my={5}>Deposez votre annonce</Text>
            <Input mx="3" style={{border:"2px solid #132d4b"}} placeholder="Titre de votre annonce" w="100%" borderRadius={0} />
            <Text fontWeight="900">Ajouter plus de photos</Text>
            <Center h={160}>
                <Pressable height={160}>
                    <Image style={{width:"95%",height:150}} source={require("../assets/icon_file.jpg")} alt="BON LOGEMENT" />
                </Pressable>
            </Center>
            <Button style={style} borderRadius={0} small mt={2} primary w="100%" >
                <Text fontWeight={600} color="#fff">Valider </Text>
            </Button>
            <Button style={style} bg="#ff0000" borderRadius={0} small mt={2} primary w="100%" onPress={()=>{setCliquer(0)}}>
                <Text fontWeight={600} color="#fff">Retour </Text>
            </Button>
        </Box>
        }
    </ScrollView>
  )
}

export default Annonce