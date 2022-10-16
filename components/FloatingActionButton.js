import React from "react";
import {Center, Box, Fab, Icon} from 'native-base';
import {AntDesign} from '@expo/vector-icons';

function FloatingActionButton() {
  return (
    <Center>
      <Box
        height="200"
        w={[200, 300, 400]}
        shadow="2"
        rounded="lg"
        _dark={{
          bg: "coolGray.200:alpha.20",
        }}
        _light={{
          bg: "coolGray.200:alpha.20",
        }}
      >
        <Fab
          renderInPortal={false}
          shadow={2}
          size="sm"
          icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
        />
      </Box>
    </Center>
  );
}

export default FloatingActionButton;
