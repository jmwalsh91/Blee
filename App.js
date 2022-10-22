import React, { useMemo } from "react";
import { NativeBaseProvider, Box, View, ZStack, Center } from "native-base";
import { Text, useWindowDimensions } from "react-native";
import FloatingActionButton from "./components/FloatingActionButton";
import { theme } from "./styles/theme";
import MakePalette from "./components/palette/MakePalette";


export default function App() {
  
  return (
    <NativeBaseProvider theme={theme}>
      <View style={{ flex: 1}} bg="black">

      <Center h="40">

      <Box mt={32}>
        <ZStack mt="40" ml={-50}>
          <Box bg="primary.700" size="20" rounded="lg" shadow={3} />
          <Box bg="primary.500" mt="5" ml="5" size="20" rounded="lg" shadow={5} />
          <Box bg="primary.300" mt="10" ml="10" size="20" rounded="lg" shadow={7} />
        </ZStack>
        <ZStack mt="40" ml={-50}>
          <Box bg="secondary.700" size="20" rounded="lg" shadow={3} />
          <Box bg="secondary.500" mt="5" ml="5" size="20" rounded="lg" shadow={5} />
          <Box bg="secondary.300" mt="10" ml="10" size="20" rounded="lg" shadow={7} />
        </ZStack>
        <ZStack mt="40" ml={-50}>
          <Box bg="success.700" size="20" rounded="lg" shadow={3} />
          <Box bg="success.500" mt="5" ml="5" size="20" rounded="lg" shadow={5} />
          <Box bg="success.300" mt="10" ml="10" size="20" rounded="lg" shadow={7} />
        </ZStack>
        <MakePalette />
      </Box>
      <Box flex={1} bg="black" justifyContent="center" alignItems="center">
        
      </Box>
      </Center>
      </View>
        <FloatingActionButton />
    </NativeBaseProvider>
  );
}
