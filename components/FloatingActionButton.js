import React from "react";
import { Center, Box, Fab, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

function FloatingActionButton() {
  return (
    <Fab
      renderInPortal={false}
      shadow={2}
      size="sm"
      icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
    />
  );
}

export default FloatingActionButton;
