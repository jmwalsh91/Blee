import React, { useEffect } from 'react'
import {ZStack, Box} from 'native-base';
import { ColorPicker } from 'react-native-color-picker'
/**
 * TODO: Determine ideal UI for color picker, and pass values to scaleBetween
 */
function MakePalette() {
  const [startColor, setStartColor] = React.useState('#000000')
  const [endColor, setEndColor] = React.useState('#FFFFFF')
  const [collarArray, setCollarArray] = React.useState([]);

useEffect(() => {
   const colorArray = scaleBetween(startColor, endColor, 10);
     setCollarArray(colorArray);
  }, [startColor, endColor]);


  return (
    <>
    <ColorPicker
       onColorSelected={color => setStartColor(color)}
       style={styles.colorContainer}
    />
    <ColorPicker
       onColorSelected={color => setEndColor(color)}
       style={styles.colorContainer}
    />
    <ZStack mt="40" ml={-50}>
      {collarArray.map((color, index) => (
        <Box key={index} bg={`${color}`} size="20" rounded="lg" shadow={3} />
      ))}
        </ZStack>
    </>
  )
}

export default MakePalette

const styles = StyleSheet.create({
    colorContainer:{
      width:350,
      height: 400,
   }
})
