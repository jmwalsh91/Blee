import React from "react";
import { NativeBaseProvider, Box, View } from "native-base";
import { Text } from "react-native";

export default function App() {
  return (
    
    <NativeBaseProvider>
   
       
        <Box alignSelf="center" bg="primary.500" _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
        }}>Hello</Box>
    
   
    </NativeBaseProvider>
  );
}