import React, { useEffect } from 'react'
import {ZStack, Box, View, Container} from 'native-base';
import { ColorPicker } from 'react-native-color-picker'
import { scaleBetween } from '../../utils/chromaFn'
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
      <Container style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
    <ColorPicker
       onColorSelected={color => setStartColor(color)}
       style={{width: 100, height: 100}}
       />
    <ColorPicker
       onColorSelected={color => setEndColor(color)}
       style={{width: 100, height: 100}}
       />
    </Container>
   {/*  <Container style={{display: "flex"}}> */}

    <ZStack mt="0" ml={-50}>
      {colorArray.map((color, index) => {
        return (
          <Box key={index} bg={color} size={"20"} rounded="lg" shadow={3}
          mt={0 - (index * 5)}
         />
          )
        })}
        </ZStack>
        {/* </Container> */}
        </>

  )
}

export default MakePalette


