import React from 'react'
import {

    Box,
    Input,
    Button,
    Text
    
} from 'native-base'

const style={
    background:"#931919",
    color:"#fff",
    fontWeight:"600"
}

function FormSearch() {
  return (
    <Box alignItems="center" w="95%" mt={5}>
        <Input mx="3" style={{border:"2px solid #132d4b"}} placeholder="Input" w="100%" borderRadius={0} />
        <Button style={style} borderRadius={0} small mt={2} primary w="100%">
            <Text fontWeight={600} color="#fff">Rechercher </Text>
        </Button>
    </Box>
  )
}

export default FormSearch