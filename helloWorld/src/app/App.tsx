/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react';
import { TamaguiProvider, View, Text, Theme, getConfig } from '@tamagui/web';

import tamaguiConfig from './tamaguiConfig';
import { Button } from 'tamagui';
import { Plus } from '@tamagui/lucide-icons';

export const App = () => {
  const [foundConfig, setFoundConfig] = useState(null);

  useEffect(() => {
    const c = getConfig();
    console.log('tamgauiConfig:', c);
    setTimeout(() => {
      setFoundConfig(c);
    }, 2000);
  }, []);

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
          <Button
            marginTop="$10"
            bordered
            padded
            size={'$2'}
            borderRadius={'$2'}
          >
            Hello button
          </Button>
          {!!foundConfig && (
            <Button
              icon={<Plus />}
              marginTop="$10"
              bordered
              padded
              size={'$2'}
              borderRadius={'$2'}
            >
              Icon Button!
            </Button>
          )}
        </View>
      </Theme>
    </TamaguiProvider>
  );
};
export default App;
