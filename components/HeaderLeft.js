import React, { useState } from "react";
import { Menu, 
    HamburgerIcon, 
    CloseIcon,
    Box, 
    Pressable, 
    Center, 
    HStack, 
    Text,
    Divider,
    NativeBaseProvider
     } from "native-base";
     import {Dimensions} from 'react-native'

  const menuPrincipal={
    background:"rgb(19,45,75,.95)",
  }

  const styleMenu={
    background:"transparent",
    padding:"10px",
    textAlign:"left",
    margin:"0px",
    color:"#fff",
    fontWeight:"600"
  }

  const styleMenuSelected={
    background: "#f7dd10",
    padding:"10px",
    textAlign:"left",
    margin:"0px",
    color:"#fff",
    fontWeight:"600"
  }

  const styleDropDown={
    background:"#f7dd10",
  }

   const styleDropDownFerme={
    visibility:"invisible"
  }

  const styleMenuDropdown={
    background:"transparent",
    padding:"10px",
    textAlign:"left",
    margin:"0px",
    color:"#1d3753",
    fontWeight:"600"
  }





function HeaderLeft({navigation, route}) {

    const mynavigation=navigation.navigation;
    const [home, setHome] = useState("faux");
    const [rechercher, setRechercher] = useState("faux");
    const [s_rechercher, setRechercher_s] = useState("");
    const [annonce, setAnnonce] = useState("faux");
    const [condition, setCondition] = useState("faux");
    const [apropos, setApropos] = useState("faux");
    const [contact, setContact] = useState("faux");
    const [regie, setRegie] = useState("faux");
    const [connexion, setConnexion] = useState("faux");
    const [current, setCurrent] = useState(1);

    const [sous, setSous] = useState("faux");

    const selectMainMenu=(cas)=>{

        setRechercher_s("");
        setHome("faux");
        setRechercher("faux");
        setAnnonce("faux");
        setCondition("faux");
        setApropos("faux");
        setContact("faux");
        setRegie("faux");
        setConnexion("faux");

        switch(cas) {
            case "home":
                setHome("vrai")
                setSous("faux");
                mynavigation.navigate('Home')
              break;
            case "rechercher":
                setRechercher("vrai")
                setSous("vrai")
                setRechercher_s(<>
                    <Text style={styleMenuDropdown}>Location (Je veux louer) </Text>
                    <Divider w={windowWidth/2} bg="#fafafa" thickness="0.2" opacity={0.5} />
                    <Text style={styleMenuDropdown}>Vente (Je veux acheter) </Text>
                    <Divider w={windowWidth/2} bg="#fafafa" thickness="0.2" opacity={0.5} />
                    <Text style={styleMenuDropdown}>Je chercher un ouvrier </Text>
                    <Divider w={windowWidth/2} bg="#fafafa" thickness="0.2" opacity={0.5} />
                    <Text style={styleMenuDropdown}>Plan et devis </Text>
                    <Divider w={windowWidth/2} bg="#fafafa" thickness="0.2" opacity={0.5} />
                </>)
              break;
            
            case "annonce":
                setAnnonce("vrai")
                setSous("faux");
                mynavigation.navigate('Annonce')
              break;
            case "condition":
                setCondition("vrai")
                setSous("faux");
              break;
              case "apropos":
                setApropos("vrai")
                setSous("faux");
                mynavigation.navigate('Favoris')
              break;
              case "contact":
                setContact("vrai")
                setSous("faux");
              break;
              case "regie":
                setRegie("faux")
              break;
              case "connexion":
                setConnexion("vrai")
                setSous("vrai");
                setRechercher_s(<>
                    <Menu.Item onPress={()=>{console.log( mynavigation.navigate('Login'))}} bgColor="transparent" padding={0}>
                        <Text  style={styleMenuDropdown}>Connexion </Text>
                    </Menu.Item>
                    
                    <Divider w={windowWidth/2} bg="#fafafa" thickness="0.2" opacity={0.5} />
                    <Menu.Item onPress={()=>{console.log( mynavigation.navigate('Login1'))}} bgColor="transparent" padding={0}>
                        <Text  style={styleMenuDropdown}>Inscription </Text>
                    </Menu.Item>
                    <Divider w={windowWidth/2} bg="#fafafa" thickness="0.2" opacity={0.5} />
                    
                </>)
              break;
            default:

            
              // code block
          }
        
    }

    const presseMenu=(event)=>{
       if(current==0){
        setCurrent(1)
       }
       else{
        setCurrent(0)
       }
    }

    const windowWidth = Dimensions.get('window').width;
    const screen = Dimensions.get("screen");

  return <Box w="90%" alignItems="center" onPress={presseMenu} borderColor="#fff" >
            <Menu closeOnSelect={true}  borderRadius={0}onClose={presseMenu} onOpen={presseMenu} borderBottomStyle={{width:"0px",color:"#fff"}} shadow={0} borderWidth={0} w={windowWidth} trigger={triggerProps => {
            return <Pressable  id="menu_hamburger" color="#132d4b" accessibilityLabel="More options menu" {...triggerProps} pl={5} >
              {current===1?<HamburgerIcon size="lg" />:<CloseIcon size="lg"  />}
            </Pressable>;
        }} bg="transparent">

    <HStack space={0} justifyContent="center" >
      <Box style={menuPrincipal} w={windowWidth/2} p={0}>
        <Menu.Item onPress={()=>selectMainMenu("home")} bgColor="transparent" padding={0}>
            <Text  style={home=="vrai"?styleMenuSelected:styleMenu}>Accueil </Text>
        </Menu.Item>
        <Divider w={windowWidth/2} bg="#fafafa" thickness="0.2" opacity={0.5} />
        <Text onPress={()=>selectMainMenu("rechercher")} style={rechercher=="vrai"?styleMenuSelected:styleMenu}>Rechercher ici </Text>
        <Divider w={windowWidth/2} bg="#fafafa" thickness="0.2" opacity={0.5} />

        <Menu.Item onPress={()=>selectMainMenu("annonce")} bgColor="transparent" padding={0}>
            <Text style={annonce=="vrai"?styleMenuSelected:styleMenu} >Déposer une annonce </Text>
        </Menu.Item>
        <Divider w={windowWidth/2} bg="#fafafa" thickness="0.2" opacity={0.5} />

        <Text onPress={()=>selectMainMenu("condition")} style={condition=="vrai"?styleMenuSelected:styleMenu}>Condition d'utilisation </Text>
        <Divider w={windowWidth/2} bg="#fafafa" thickness="0.2" opacity={0.5} />
        <Menu.Item onPress={()=>selectMainMenu("apropos")} bgColor="transparent" padding={0}>
            <Text  style={apropos=="vrai"?styleMenuSelected:styleMenu}>A propos de nous </Text>
        </Menu.Item>
        <Divider w={windowWidth/2} bg="#fafafa" thickness="0.2" opacity={0.5} />
        <Text onPress={()=>selectMainMenu("contact")} style={contact=="vrai"?styleMenuSelected:styleMenu}>Contactez-nous </Text>
        <Divider w={windowWidth/2} bg="#fafafa" thickness="0.2" opacity={0.5} />
        <Text onPress={()=>selectMainMenu("regie")} style={regie=="vrai"?styleMenuSelected:styleMenu}>Régie publicitaire</Text>
        <Divider w={windowWidth/2} bg="#fafafa" thickness="0.2" opacity={0.5} />
        <Text onPress={()=>selectMainMenu("connexion")} style={connexion=="vrai"?styleMenuSelected:styleMenu}>Connexion / Inscription </Text>
        <Divider w={windowWidth/2} bg="#fafafa" thickness="0.2" opacity={0.5} />
      </Box>
      <Box w={windowWidth/2} style={sous=="vrai"?styleDropDown:styleDropDownFerme}>
        
        {
            s_rechercher
        }

      </Box>
    </HStack>   

      </Menu>
    </Box>;
}
export default HeaderLeft