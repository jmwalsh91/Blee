import React from "react";
import { Canvas, Text, useFont, Fill } from "@shopify/react-native-skia";

function BleeLogo() {
    const fontSize = 100;
    const font = useFont(require("./Cities_Typeface.ttf"), fontSize);
    if (font === null) {

        return null
    }

  return (
    <Canvas style={{ flex: 1}}>
     <Fill
        color="white"
        />
        <Text
        x={0}
        y={fontSize}
        text="Blee"
        font={font}
/>
    </Canvas>
  );
}

export default BleeLogo;
