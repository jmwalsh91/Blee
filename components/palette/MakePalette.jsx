import React from 'react'
import {ZStack, Box} from 'native-base';
import { ColorPicker } from 'react-native-color-picker'
/**
 * TODO: Determine ideal UI for color picker, and pass values to scaleBetween
 */
function MakePalette() {
  return (
    <>
    <ColorPicker
       onColorSelected={color => alert(`Selected: ${color}`)}
       style={styles.colorContainer}
    />
    <ColorPicker
       onColorSelected={color => alert(`Selected: ${color}`)}
       style={styles.colorContainer}
    />
    <ZStack mt="40" ml={-50}>
          <Box bg="success.700" size="20" rounded="lg" shadow={3} />
          <Box bg="success.500" mt="5" ml="5" size="20" rounded="lg" shadow={5} />
          <Box bg="success.300" mt="10" ml="10" size="20" rounded="lg" shadow={7} />
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
