import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

import PhotoCamera from './photo';

export default App = () => {
  const [renderView, setRenderView] = useState('');

  // Video render
  if (renderView === 'video') {
    return <Text>Video</Text>;
  }

  // Photo render
  if (renderView === 'photo') {
    return <PhotoCamera />;
  }

  // Default render
  return (
    <View style={AppStyles.buttonsView}>
      <Button
        title="Take photo"
        onPress={() => setRenderView('photo')}></Button>
      <Button
        title="Record Video"
        onPress={() => setRenderView('video')}></Button>
    </View>
  );
};

const AppStyles = StyleSheet.create({
  buttonsView: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
