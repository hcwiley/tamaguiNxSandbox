/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import { TamaguiProvider, View, Text, Theme } from 'tamagui';

import tamaguiConfig from './tamaguiConfig';
import { Button } from 'tamagui';
import { Plus } from '@tamagui/lucide-icons';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const Camera = require('@tamagui/lucide-icons/dist/cjs/icons/Camera');

export const App = () => {
  return (
    <TamaguiProvider defaultTheme="dark" config={tamaguiConfig}>
      <Theme name="light">
        <View
          flex={1}
          alignContent="center"
          alignItems="center"
          padding="$10"
          margin="$10"
          columnGap="$10"
          flexDirection="column"
        >
          <Text fontSize="$5">Hello World</Text>
          <Button marginTop="$10" bordered padded size={'$2'}>
            Hello button
          </Button>
          <Button icon={<Plus />} marginTop="$10" bordered padded size={'$2'}>
            Icon Button!
          </Button>
        </View>
      </Theme>
    </TamaguiProvider>
  );
};
export default App;
