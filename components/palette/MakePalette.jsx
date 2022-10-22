import React, { useEffect } from 'react'
import {Stack, ZStack, Box, View, Container, Flex} from 'native-base';
import { ColorPicker } from 'react-native-color-picker'
import { scaleBetween } from '../../utils/chromaFn'
import chroma from 'chroma-js'
/**
 * TODO: Determine ideal UI for color picker, and pass values to scaleBetween
 */
function MakePalette() {
  const [startColor, setStartColor] = React.useState('#000000')
  const [endColor, setEndColor] = React.useState('#FFFFFF')
  const [colorArray, setColorArray] = React.useState([]);

useEffect(() => {
   const colorArray = scaleBetween(startColor, endColor, 10);
     setColorArray(colorArray);
  }, [startColor, endColor]);


  return (
  <>
      <Container mt="150" style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
    <ColorPicker
       onColorSelected={color => setStartColor(color)}
       style={{width: 150, height: 150}}
       />
    <ColorPicker
       onColorSelected={color => setEndColor(color)}
       style={{width: 150, height: 150}}
       />
    </Container>
   {/*  <Container style={{display: "flex"}}> */}

    <Flex mt="150" direction='row' >
      {colorArray.map((color, index) => {
  
        return (
          <Box key={index} bg={color} size={"10"} rounded="lg" shadow={3} mt="5" 
         />
          )
        })}
        </Flex>
        {/* </Container> */}
        </>

  )
}

export default MakePalette


